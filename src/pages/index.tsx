/* eslint-disable react/no-children-prop */
import {
  Heading,
  HStack,
  VStack,
  useControllableState,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Image,
  Flex
} from "@chakra-ui/react"
import { useEffect } from "react"
import { ethUsdData, EthUsdLog } from "@/data/ethUsdData"
import { Spinner } from '@chakra-ui/react'
import { EthUsdLogTable } from "@/components/EthUsdLogTable"
import { EthUsdLogsTable } from "@/components/EthUsdLogsTable"
import { Entries } from "@/components/Entries"
import logo from "@/images/ETH.png"

const Index = () => {
  const [ethUsdLog, setEthUsdLog] = useControllableState<EthUsdLog | null>({ defaultValue: null })
  const [loading, setLoading] = useControllableState<boolean>({ defaultValue: true })
  let fetchTimer: NodeJS.Timeout

  const fetchEthUsdLog = async () => {
    clearTimeout(fetchTimer)
    fetch("https://dapi.binance.com/dapi/v1/premiumIndex")
      .then((res) => res.json())
      .then((data) => {
        const ethUsd220930 = data.find((log: any) => log.symbol === "ETHUSD_220930")
        const ethUsd221230 = data.find((log: any) => log.symbol === "ETHUSD_221230")
        const ethUsdPerp = data.find((log: any) => log.symbol === "ETHUSD_PERP")
        setEthUsdLog({
          timestamp: ethUsd220930.time,
          markPrices: {
            ETHUSD_220930: ethUsd220930.markPrice,
            ETHUSD_221230: ethUsd221230.markPrice,
            ETHUSD_PERP: ethUsdPerp.markPrice,
          }
        })
        setLoading(false)
      })
      .finally(() => {
        fetchTimer = setTimeout(fetchEthUsdLog, 10000)
      })
    }

  useEffect(() => {
    fetchEthUsdLog()
  }, [])

  return <>
    <VStack spacing="10">
      <Heading as='h1' mt="10">
        <Flex fontSize="28px" alignItems="center"><Image src={logo.src} marginRight=".3em" alt="ETH-logo" height="28px" />Saya-chan</Flex>
        <Text fontSize="14px" color="#888">~poweth checker~</Text>
      </Heading>
      <VStack spacing="4">
        <Heading as='h2' fontSize="20px">Current mark price (Binance)</Heading>
        {(loading || !ethUsdLog) ? <Spinner /> : <EthUsdLogTable ethUsdLog={ethUsdLog} />}
      </VStack>
      <VStack spacing="4" maxWidth="350px">
        <Heading as='h2' fontSize="20px">My position (entries)</Heading>
        <Entries />
      </VStack>
      <VStack spacing="4">
        <Heading as='h2' fontSize="24px">Mark price history (Binance)</Heading>
        <EthUsdLogsTable ethUsdLogs={ethUsdData} />
      </VStack>
    </VStack>
  </>
}

export default Index
