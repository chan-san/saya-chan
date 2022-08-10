import * as React from "react"
import {
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react"
import { EthUsdLog } from "@/data/ethUsdData"
import { DiffRateSimulation } from "./DiffRateSimulation"
import styles from "@/styles/EthUsdLogTable.module.scss"

export type Simulation = {
  rate_0930: string
  rate_1230: string
}

interface Props {
  ethUsdLog: EthUsdLog
  simulation: Simulation
  setSimulation: (simulation: Simulation) => void
}

const round2 = (value: number) => (Math.round(value * 100) / 100.0).toLocaleString()

export const EthUsdLogTable: React.FC<Props> = ({
  ethUsdLog,
  simulation,
  setSimulation
}) => {

  const onChangeSimulation0930 = (value: string | string[]) => {
    simulation.rate_0930 = String(value)
    setSimulation(simulation)
  }
  const onChangeSimulation1230 = (value: string | string[]) => {
    simulation.rate_1230 = String(value)
    setSimulation(simulation)
  }

  return (
    <Table className={styles.tableContainer}>
      <TableCaption>{(new Date(ethUsdLog.timestamp)).toLocaleString(undefined, {timeZoneName: 'short'})}</TableCaption>
      <Thead>
        <Tr>
          <Th>symbol</Th>
          <Th>mark price</Th>
          <Th>diff</Th>
          <Th>diff rate</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>ETHUSD_220930</Td><Td>${round2(ethUsdLog.markPrices.ETHUSD_220930)}</Td>
          <Td>${round2(ethUsdLog.markPrices.ETHUSD_PERP - ethUsdLog.markPrices.ETHUSD_220930)}</Td>
          <Td>{round2((1 - ethUsdLog.markPrices.ETHUSD_220930 / ethUsdLog.markPrices.ETHUSD_PERP) * 100.0)}% <DiffRateSimulation value={simulation.rate_0930} onChange={onChangeSimulation0930} /></Td>
        </Tr>
        <Tr>
          <Td>ETHUSD_221230</Td><Td>${round2(ethUsdLog.markPrices.ETHUSD_221230)}</Td>
          <Td>${round2(ethUsdLog.markPrices.ETHUSD_PERP - ethUsdLog.markPrices.ETHUSD_221230)}</Td>
          <Td>{round2((1 - ethUsdLog.markPrices.ETHUSD_221230 / ethUsdLog.markPrices.ETHUSD_PERP) * 100.0)}% <DiffRateSimulation value={simulation.rate_1230} onChange={onChangeSimulation1230} /></Td>
        </Tr>
        <Tr>
          <Td>ETHUSD_PERP</Td><Td>${round2(ethUsdLog.markPrices.ETHUSD_PERP)}</Td>
          <Td textAlign="center">-</Td>
          <Td textAlign="center">-</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
