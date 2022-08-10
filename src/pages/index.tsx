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
    <VStack spacing="14" padding="6">
      <Heading as='h1'>
        <Flex fontSize="28px" alignItems="center"><Image src={logo.src} marginRight=".3em" alt="ETH-logo" height="28px" />Saya-chan</Flex>
        <Text fontSize="14px" color="#888">~poweth checker~</Text>
      </Heading>
      <VStack spacing="4">
        <Heading as='h2' fontSize="24px">Current mark price (Binance)</Heading>
        {(loading || !ethUsdLog) ? <Spinner /> : <EthUsdLogTable ethUsdLog={ethUsdLog} />}
      </VStack>
      <VStack spacing="4">
        <Heading as='h2' fontSize="24px">My position (entries)</Heading>
        <HStack spacing="4">
          <Text width="120px" flex="none" textAlign="left" fontSize="14px">ETHUSD_220930</Text>
          <InputGroup>
            <InputLeftAddon children='price $' />
            <Input placeholder='1702.20' />
          </InputGroup>
          <InputGroup>
            <Input placeholder='100' />
            <InputRightAddon children='ETH' />
          </InputGroup>
        </HStack>
        <HStack spacing="4">
          <Text width="120px" flex="none" textAlign="left" fontSize="14px">ETHUSD_221230</Text>
          <InputGroup>
            <InputLeftAddon children='price $' />
            <Input placeholder='1692.20' />
          </InputGroup>
          <InputGroup>
            <Input placeholder='25' />
            <InputRightAddon children='ETH' />
          </InputGroup>
        </HStack>
        <HStack spacing="4">
          <Text width="120px" flex="none" textAlign="left" fontSize="14px">ETHUSD_PERP</Text>
          <InputGroup>
            <InputLeftAddon children='price $' />
            <Input placeholder='1712.84' />
          </InputGroup>
          <InputGroup>
            <Input placeholder='100' />
            <InputRightAddon children='ETH' />
          </InputGroup>
        </HStack>
        <HStack spacing="4">
          <Text width="120px" flex="none" textAlign="left" fontSize="14px">Deposit</Text>
          <InputGroup>
            <InputLeftAddon children='price $' />
            <Input placeholder='1712.84' />
          </InputGroup>
          <InputGroup>
            <Input placeholder='25' />
            <InputRightAddon children='ETH' />
          </InputGroup>
        </HStack>
        <Text color="#aa0000" fontSize="16px">You Get $xxx,xxx</Text>
      </VStack>
      <VStack spacing="4">
        <Heading as='h2' fontSize="24px">Mark price history (Binance)</Heading>
        <EthUsdLogsTable ethUsdLogs={ethUsdData} />
      </VStack>
    </VStack>
  </>
}

export default Index
