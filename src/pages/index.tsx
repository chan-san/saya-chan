import {
  Heading,
  VStack,
  useControllableState,
  Text,
  Image,
  Flex
} from "@chakra-ui/react"
import { useEffect, useCallback, useRef } from "react"
import { EthUsdData } from "@/types/EthUsdData"
import { Spinner } from '@chakra-ui/react'
import { EthUsdTable, Simulation } from "@/components/EthUsdTable"
import { Entries } from "@/components/Entries"
import logo from "@/images/ETH.png"

interface PremiumIndex {
  symbol: string
  time: number
  markPrice: number
}

const Index = () => {
  const [ethUsdData, setEthUsdData] = useControllableState<EthUsdData | null>({ defaultValue: null })
  const [loading, setLoading] = useControllableState<boolean>({ defaultValue: true })
  const [errorMessage, setErrorMessage] = useControllableState<string>({ defaultValue: "" })
  const [simulation, setSimulation] = useControllableState<Simulation>({ defaultValue: {
    rate_0930: '',
    rate_1230: ''
  } })
  const fetchTimerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const setSimulationAndUpdate = (simulation: Simulation) => {
    setSimulation(simulation)
    fetchEthUsdData()
  }

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
      const ethUsd220930: PremiumIndex = data.find((log: PremiumIndex) => log.symbol === "ETHUSD_220930")
      const ethUsd221230: PremiumIndex = data.find((log: PremiumIndex) => log.symbol === "ETHUSD_221230")
      const ethUsdPerp: PremiumIndex = data.find((log: PremiumIndex) => log.symbol === "ETHUSD_PERP")
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

  useEffect(() => {
    fetchEthUsdData()
  }, [fetchEthUsdData])

  return <>
    <VStack spacing="10">
      <Heading as='h1' mt="10">
        <Flex fontSize="28px" alignItems="center"><Image src={logo.src} marginRight=".3em" alt="ETH-logo" height="28px" />Saya-chan</Flex>
        <Text fontSize="14px" color="#888">~poweth checker~</Text>
      </Heading>
      <VStack spacing="4">
        <Heading as='h2' fontSize="20px">Current mark price (Binance)</Heading>
        {(loading || !ethUsdData) ? <><Spinner />{errorMessage && <Text color="red">[Error]<br />{errorMessage}</Text>}</> : <EthUsdTable ethUsdData={ethUsdData} simulation={simulation} setSimulation={setSimulationAndUpdate} />}
      </VStack>
      <VStack spacing="4" maxWidth="350px">
        <Heading as='h2' fontSize="20px">My position (entries)</Heading>
        <Entries ethUsdData={ethUsdData} />
      </VStack>
    </VStack>
  </>
}

export default Index
