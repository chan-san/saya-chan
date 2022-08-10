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

interface Props {
  ethUsdLog: EthUsdLog
}

const round2 = (value: number) => (Math.round(value * 100) / 100.0).toLocaleString()

export const EthUsdLogTable: React.FC<Props> = ({
  ethUsdLog
}) => (
  <Table>
    <TableCaption mt="0">{(new Date(ethUsdLog.timestamp)).toLocaleString(undefined, {timeZoneName: 'short'})}</TableCaption>
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
        <Td>-${round2(ethUsdLog.markPrices.ETHUSD_PERP - ethUsdLog.markPrices.ETHUSD_220930)}</Td>
        <Td>{round2((1 - ethUsdLog.markPrices.ETHUSD_220930 / ethUsdLog.markPrices.ETHUSD_PERP) * 100.0)}%</Td>
      </Tr>
      <Tr>
        <Td>ETHUSD_221230</Td><Td>${round2(ethUsdLog.markPrices.ETHUSD_220930)}</Td>
        <Td>-${round2(ethUsdLog.markPrices.ETHUSD_PERP - ethUsdLog.markPrices.ETHUSD_221230)}</Td>
        <Td>{round2((1 - ethUsdLog.markPrices.ETHUSD_221230 / ethUsdLog.markPrices.ETHUSD_PERP) * 100.0)}%</Td>
      </Tr>
      <Tr>
        <Td>ETHUSD_PERP</Td><Td>${round2(ethUsdLog.markPrices.ETHUSD_PERP)}</Td>
        <Td textAlign="center">-</Td>
        <Td textAlign="center">-</Td>
      </Tr>
    </Tbody>
  </Table>
)
