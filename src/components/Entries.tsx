/* eslint-disable react/no-children-prop */
import React, { useEffect } from "react"
import {
  VStack,
  HStack,
  Text,
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  useControllableState
} from "@chakra-ui/react"
import styles from "@/styles/Entries.module.scss"
import { EthUsdData } from "@/types/EthUsdData"
import { useRouter } from 'next/router'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ExternalLink } from "@/parts/ExternalLink"
import { formatNumber } from "@/lib/formatNumber"

interface Props {
  ethUsdData: EthUsdData | null
}

type Investment = {
  profit: number
  deposit: number
}

const signText = (value: number, winText?: string, loseText?: string) => {
  winText ||= '+'
  loseText ||= '-'

  return value > 0 ? winText : value < 0 ? loseText : ''
}

type Refs = {
  entryPrice: React.RefObject<HTMLInputElement>,
  entrySize: React.RefObject<HTMLInputElement>
}

const createRefs: () => Refs = () => (
  {
    entryPrice: React.createRef(),
    entrySize: React.createRef()
  }
)

const culculateFunds = (refs: Refs, markPrice: number, type: 'LONG' | 'SHORT'): {[key: string]: number} => {
  const price = Number(refs.entryPrice.current?.value)
  const size = Number(refs.entrySize.current?.value)
  const funds = price * size

  return {price, size, funds, PNL: type === 'LONG' ? size - funds/markPrice : funds/markPrice - size}
}

const addValueToHash = (hash: {[key: string]: string}, key: string, value: string | undefined) => {
  if (value) {
    hash[key] = String(value)
  }
}
  
export const Entries: React.FC<Props> = ({
  ethUsdData
}) => {
  const [investment, setInvestment] = useControllableState<Investment>({ defaultValue: {profit: 0, deposit: 0} })
  const refs: {[key: string]: Refs} = {
    ETHUSD_220930: createRefs(),
    ETHUSD_221230: createRefs(),
    ETHUSD_PERP: createRefs(),
    Deposit: createRefs()
  }

  const [preFilledLink, setPreFilledLink] = useControllableState<string>({ defaultValue: '' })

  const onChange = () => {
    if (!ethUsdData) {
      return
    }

    const deposit = culculateFunds(refs.Deposit, ethUsdData.markPrices.ETHUSD_PERP, 'LONG')
    const currentPNL =
      culculateFunds(refs.ETHUSD_PERP, ethUsdData.markPrices.ETHUSD_PERP, 'LONG').PNL
      + culculateFunds(refs.ETHUSD_220930, ethUsdData.markPrices.ETHUSD_220930, 'SHORT').PNL
      + culculateFunds(refs.ETHUSD_221230, ethUsdData.markPrices.ETHUSD_221230, 'SHORT').PNL

    setInvestment({
      profit: deposit.funds > 0 ? (deposit.size + currentPNL) * ethUsdData.markPrices.ETHUSD_PERP - deposit.funds : 0,
      deposit: deposit.funds
    })

    const query = {}
    addValueToHash(query, 'p9', refs.ETHUSD_220930.entryPrice.current?.value)
    addValueToHash(query, 's9', refs.ETHUSD_220930.entrySize.current?.value)
    addValueToHash(query, 'p12', refs.ETHUSD_221230.entryPrice.current?.value)
    addValueToHash(query, 's12', refs.ETHUSD_221230.entrySize.current?.value)
    addValueToHash(query, 'pp', refs.ETHUSD_PERP.entryPrice.current?.value)
    addValueToHash(query, 'sp', refs.ETHUSD_PERP.entrySize.current?.value)
    addValueToHash(query, 'pd', refs.Deposit.entryPrice.current?.value)
    addValueToHash(query, 'sd', refs.Deposit.entrySize.current?.value)
    setPreFilledLink(`${location.protocol}//${location.host}${location.pathname}?${new URLSearchParams(query).toString()}`)
  }

  useEffect(() => {
    onChange()
  }, [ethUsdData])

  const router = useRouter()
  useEffect(() => {
    const {p9, s9, p12, s12, pp, sp, pd, sd} = router.query
    if (p9 && refs.ETHUSD_220930.entryPrice.current) {
      refs.ETHUSD_220930.entryPrice.current.value = String(p9)
    }
    if (s9 && refs.ETHUSD_220930.entrySize.current) {
      refs.ETHUSD_220930.entrySize.current.value = String(s9)
    }
    if (p12 && refs.ETHUSD_221230.entryPrice.current) {
      refs.ETHUSD_221230.entryPrice.current.value = String(p12)
    }
    if (s12 && refs.ETHUSD_221230.entrySize.current) {
      refs.ETHUSD_221230.entrySize.current.value = String(s12)
    }
    if (pp && refs.ETHUSD_PERP.entryPrice.current) {
      refs.ETHUSD_PERP.entryPrice.current.value = String(pp)
    }
    if (sp && refs.ETHUSD_PERP.entrySize.current) {
      refs.ETHUSD_PERP.entrySize.current.value = String(sp)
    }
    if (pd && refs.Deposit.entryPrice.current) {
      refs.Deposit.entryPrice.current.value = String(pd)
    }
    if (sd && refs.Deposit.entrySize.current) {
      refs.Deposit.entrySize.current.value = String(sd)
    }
    onChange()
  }, [router]);
  

  return (
    <VStack spacing="4" className={styles.container}>
      <Text color={signText(investment.profit, '#008888', '#aa0000')} fontSize="18px" fontWeight="bold" pb="2">
        {investment.deposit > 0 ? `${signText(investment.profit, 'Win', 'Lose')} $${formatNumber(Math.abs(investment.profit))} ${signText(investment.profit, '🎉', '😭')}` : 'Win $xxx,xxx'}
        <br />
        <small>(ROI {investment.deposit > 0 ? `${formatNumber(((investment.profit + investment.deposit) / investment.deposit - 1) * 100, {hasSign: true})}%` : '+XX.XX%'})</small>
      </Text>
      <HStack spacing="4">
        <Text className={styles.label}>ETHUSD_220930</Text>
        <InputGroup className={styles.inputGroup}>
          <InputLeftAddon children='price $' />
          <Input placeholder='1702.20' className={styles.entryPrice} ref={refs.ETHUSD_220930.entryPrice} onChange={onChange} />
        </InputGroup>
        <InputGroup className={styles.inputGroup}>
          <Input placeholder='100' ref={refs.ETHUSD_220930.entrySize} onChange={onChange} />
          <InputRightAddon children='ETH' />
        </InputGroup>
      </HStack>
      <HStack spacing="4">
        <Text className={styles.label}>ETHUSD_221230</Text>
        <InputGroup className={styles.inputGroup}>
          <InputLeftAddon children='price $' />
          <Input placeholder='1692.20' className={styles.entryPrice} ref={refs.ETHUSD_221230.entryPrice} onChange={onChange} />
        </InputGroup>
        <InputGroup className={styles.inputGroup}>
          <Input placeholder='25' ref={refs.ETHUSD_221230.entrySize} onChange={onChange} />
          <InputRightAddon children='ETH' />
        </InputGroup>
      </HStack>
      <HStack spacing="4">
        <Text className={styles.label}>ETHUSD_PERP</Text>
        <InputGroup className={styles.inputGroup}>
          <InputLeftAddon children='price $' />
          <Input placeholder='1712.84' className={styles.entryPrice} ref={refs.ETHUSD_PERP.entryPrice} onChange={onChange} />
        </InputGroup>
        <InputGroup className={styles.inputGroup}>
          <Input placeholder='100' ref={refs.ETHUSD_PERP.entrySize} onChange={onChange} />
          <InputRightAddon children='ETH' />
        </InputGroup>
      </HStack>
      <HStack spacing="4">
        <Text className={styles.label}>Deposit</Text>
        <InputGroup className={styles.inputGroup}>
          <InputLeftAddon children='price $' />
          <Input placeholder='1712.84' className={styles.entryPrice} ref={refs.Deposit.entryPrice} onChange={onChange} />
        </InputGroup>
        <InputGroup className={styles.inputGroup}>
          <Input placeholder='25' ref={refs.Deposit.entrySize} onChange={onChange} />
          <InputRightAddon children='ETH' />
        </InputGroup>
      </HStack>
      {preFilledLink !== '' && <Box>
        <ExternalLink href={preFilledLink}><ExternalLinkIcon /> Open pre-filled link</ExternalLink>
      </Box>}
    </VStack>
  )
}
