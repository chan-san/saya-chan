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
import { EthUsdData } from "@/types/EthUsdData"
import { DiffRateSimulation } from "./DiffRateSimulation"
import { formatNumber } from "@/lib/formatNumber"
import styles from "@/styles/EthUsdTable.module.scss"

export type Simulation = {
  rate_0930: string
  rate_1230: string
}

interface Props {
  ethUsdData: EthUsdData
  simulation: Simulation
  setSimulation: (simulation: Simulation) => void
}

export const EthUsdTable: React.FC<Props> = ({
  ethUsdData,
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
      <TableCaption>{(new Date(ethUsdData.timestamp)).toLocaleString(undefined, {timeZoneName: 'short'})}</TableCaption>
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
          <Td>ETHUSD_220930</Td><Td>{formatNumber(ethUsdData.markPrices.ETHUSD_220930, {prefix: '$'})}</Td>
          <Td>{formatNumber(ethUsdData.markPrices.ETHUSD_PERP - ethUsdData.markPrices.ETHUSD_220930, {prefix: '$'})}</Td>
          <Td>{formatNumber((1 - ethUsdData.markPrices.ETHUSD_220930 / ethUsdData.markPrices.ETHUSD_PERP) * 100)}% <DiffRateSimulation value={simulation.rate_0930} onChange={onChangeSimulation0930} /></Td>
        </Tr>
        <Tr>
          <Td>ETHUSD_221230</Td><Td>{formatNumber(ethUsdData.markPrices.ETHUSD_221230, {prefix: '$'})}</Td>
          <Td>{formatNumber(ethUsdData.markPrices.ETHUSD_PERP - ethUsdData.markPrices.ETHUSD_221230, {prefix: '$'})}</Td>
          <Td>{formatNumber((1 - ethUsdData.markPrices.ETHUSD_221230 / ethUsdData.markPrices.ETHUSD_PERP) * 100)}% <DiffRateSimulation value={simulation.rate_1230} onChange={onChangeSimulation1230} /></Td>
        </Tr>
        <Tr>

          <Td>ETHUSD_PERP</Td><Td>${formatNumber(ethUsdData.markPrices.ETHUSD_PERP)}</Td>
          <Td textAlign="center">-</Td>
          <Td textAlign="center">-</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
