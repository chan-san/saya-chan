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
import { WarningTwoIcon } from '@chakra-ui/icons'
import styles from "@/styles/Entries.module.scss"
import { Symbol, EthUsdData } from "@/types/EthUsdData"
import { useRouter } from 'next/router'
import { ExternalLink } from "@/parts/ExternalLink"
import { formatNumber } from "@/lib/formatNumber"

interface Props {
  ethUsdData: EthUsdData | null
}

type Investment = {
  profit: number
  deposit: number
}

type Position = 'long' | 'short'
type Positions = {[key in Symbol]: Position}

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

const culculateFunds = (refs: Refs, markPrice: number, position: Position): {[key: string]: number} => {
  const price = Number(refs.entryPrice.current?.value)
  const size = Number(refs.entrySize.current?.value)
  const funds = price * size

  return {price, size, funds, PNL: position === 'long' ? size - funds/markPrice : funds/markPrice - size}
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

  const defaultPositions: Positions = {
    ETHUSD_220930: 'short',
    ETHUSD_221230: 'short',
    ETHUSD_PERP: 'long',
  }

  const [positions, setPositions] = useControllableState<Positions>({ defaultValue: defaultPositions})

  const onTogglePositions = (symbol: Symbol) => {
    setPositions({
      ...positions,
      [symbol]: positions[symbol] === 'long' ? 'short' : 'long'
    })
  }

  const [preFilledLink, setPreFilledLink] = useControllableState<string>({ defaultValue: '' })

  const onChange = () => {
    if (!ethUsdData) {
      return
    }

    const deposit = culculateFunds(refs.Deposit, ethUsdData.markPrices.ETHUSD_PERP, 'long')
    const currentPNL =
      culculateFunds(refs.ETHUSD_PERP, ethUsdData.markPrices.ETHUSD_PERP, positions['ETHUSD_PERP']).PNL
      + culculateFunds(refs.ETHUSD_220930, ethUsdData.markPrices.ETHUSD_220930, positions['ETHUSD_220930']).PNL
      + culculateFunds(refs.ETHUSD_221230, ethUsdData.markPrices.ETHUSD_221230, positions['ETHUSD_221230']).PNL

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

    const originalUrl = `${location.protocol}//${location.host}${location.pathname}`
    setPreFilledLink(Object.keys(query).length > 0 ? `${originalUrl}?${new URLSearchParams(query).toString()}`: originalUrl)
  }

  useEffect(() => {
    onChange()
  }, [ethUsdData, positions])

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

  const [showProfit, setShowProfit] = useControllableState<boolean>({ defaultValue: true })

  const onToggleProfitVisible = () => {
    setShowProfit(!showProfit)
  }

  const onClickPositionReset = () => {
    if (!window.confirm("Are you sure? You can't undo this action afterwards.")) {
      return
    }

    Object.keys(refs).forEach(key => {
      const {entryPrice, entrySize} = refs[key]
      if (entryPrice.current) {
        entryPrice.current.value = ''
      }
      if (entrySize.current) {
        entrySize.current.value = ''
      }
    })

    setPositions(defaultPositions)
  }

  return (
    <VStack spacing="4" className={styles.container}>
      <Text color={signText(investment.profit, '#008888', '#aa0000')} fontSize="18px" fontWeight="bold" pb="2" cursor="pointer" position="relative" onClick={onToggleProfitVisible}>
        {investment.deposit > 0 ? <><span>{signText(investment.profit, 'Win', 'Lose')}</span> $<span style={{filter: showProfit ? undefined : 'blur(5px)'}}>{formatNumber(Math.abs(investment.profit))}</span> <span>{signText(investment.profit, '🎉', '😭')}</span></> : <span>Win $xxx,xxx</span>}
        <br />
        <small>(ROI {investment.deposit > 0 ? `${formatNumber(((investment.profit + investment.deposit) / investment.deposit - 1) * 100, {hasSign: true})}%` : '+XX.XX%'})</small>
      </Text>
      <HStack spacing="4">
        <Text onClick={() => onTogglePositions('ETHUSD_220930')} className={`${styles.label} ${styles[positions.ETHUSD_220930]}`}>ETHUSD_220930</Text>
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
        <Text onClick={() => onTogglePositions('ETHUSD_221230')} className={`${styles.label} ${styles[positions.ETHUSD_221230]}`}>ETHUSD_221230</Text>
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
        <Text onClick={() => onTogglePositions('ETHUSD_PERP')} className={`${styles.label} ${styles[positions.ETHUSD_PERP]}`}>ETHUSD_PERP</Text>
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
      {preFilledLink.includes('?') ? <Box>
        <Text>Here is the link with your position prefilled</Text>
        <ExternalLink href={preFilledLink} linkAsText={true} wordBreak="break-all" textAlign="left" />
        <Text mt="14px" cursor="pointer" userSelect="none" onClick={onClickPositionReset}><WarningTwoIcon /> Reset</Text>
      </Box> : <ExternalLink href={preFilledLink} linkAsText={true} wordBreak="break-all" textAlign="left" />}
    </VStack>
  )
}
