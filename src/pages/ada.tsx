import {
  Heading,
  VStack,
  Text,
  Image,
  Flex
} from "@chakra-ui/react"
import { useEffect, useCallback, useRef, useState } from "react"
import { EthUsdData } from "@/types/EthUsdData"
import { Spinner } from '@chakra-ui/react'
import { EthUsdTable, Simulation } from "@/components/EthUsdTable"
import { Entries } from "@/components/Entries"
import logo from "@/images/ADA.png"
import { NextSeo } from 'next-seo'

interface PremiumIndex {
  symbol: string
  time: number
  markPrice: number
}

const Index = () => {
  const [ethUsdData, setEthUsdData] = useState<EthUsdData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [simulation, setSimulation] = useState<Simulation>({
    rate_0930: '',
    rate_1230: ''
  })
  const fetchTimerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const fetchEthUsdData = useCallback(async () => {  
    clearTimeout(fetchTimerRef.current)
    const res = await fetch("https://dapi.binance.com/dapi/v1/premiumIndex")
    const data = await res.json()
    if (!res.ok) {
      setErrorMessage(data.msg)
      console.error(data.msg)
      fetchTimerRef.current = setTimeout(fetchEthUsdData, 10000)
      return
    }
    
    try {
      const ethUsd220930: PremiumIndex = data.find((log: PremiumIndex) => log.symbol === "ADAUSD_220930")
      const ethUsd221230: PremiumIndex = data.find((log: PremiumIndex) => log.symbol === "ADAUSD_221230")
      const ethUsdPerp: PremiumIndex = data.find((log: PremiumIndex) => log.symbol === "ADAUSD_PERP")
      setEthUsdData({
        timestamp: ethUsd220930.time,
        markPrices: {
          ETHUSD_220930: simulation.rate_0930 !== '' ? ethUsdPerp.markPrice * (1 - Number(simulation.rate_0930)) : ethUsd220930.markPrice,
          ETHUSD_221230: simulation.rate_1230 !== '' ? ethUsdPerp.markPrice * (1 - Number(simulation.rate_1230)) : ethUsd221230.markPrice,
          ETHUSD_PERP: ethUsdPerp.markPrice,
        }
      })
      setLoading(false)
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message)
      }
    } finally {
      fetchTimerRef.current = setTimeout(fetchEthUsdData, 10000)
    }
  }, [simulation, setEthUsdData, setLoading, setErrorMessage])

  const setSimulationAndUpdate = useCallback((simulation: Simulation) => {
    setSimulation(simulation)
    fetchEthUsdData()
  }, [setSimulation, fetchEthUsdData])

  useEffect(() => {
    if (fetchTimerRef.current === undefined) {
      fetchTimerRef.current = setTimeout(fetchEthUsdData, 10)
    }
  }, [fetchEthUsdData])

  return <>
    <NextSeo
      titleTemplate="%s"
      title="Saya-chan ~ada-checker~"
      description="ada-checker"
      additionalLinkTags={[
        {
          rel: 'icon',
          sizes: '64x64',
          href: 'https://raw.githubusercontent.com/chan-san/saya-chan/main/public/ADA.png',
          type: 'image/png'
        }
      ]}
    />
    <VStack spacing="10">
      <Heading as='h1' mt="10">
        <Flex fontSize="28px" alignItems="center"><Image src={logo.src} marginRight=".3em" alt="ADA-logo" height="28px" />Saya-chan</Flex>
        <Text fontSize="14px" color="#888">~ada checker~</Text>
      </Heading>
      <VStack spacing="4">
        <Heading as='h2' fontSize="20px">Current mark price (Binance)</Heading>
        {(loading || !ethUsdData) ? <><Spinner />{errorMessage && <Text color="red">[Error]<br />{errorMessage}</Text>}</> : <EthUsdTable ethUsdData={ethUsdData} simulation={simulation} digit={3} coin={'ADA'} setSimulation={setSimulationAndUpdate} />}
      </VStack>
      <VStack spacing="4" maxWidth="350px">
        <Heading as='h2' fontSize="20px">My position (entries)</Heading>
        <Entries ethUsdData={ethUsdData} digit={3} coin={'ADA'} />
      </VStack>
    </VStack>
  </>
}

export default Index
