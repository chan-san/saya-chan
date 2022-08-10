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
  ethUsdLogs: EthUsdLog []
}

const round2 = (value: number) => (Math.round(value * 100) / 100.0).toLocaleString()

/*
{ethUsdData.map((log, index) => <EthUsdLogTable key={`history-${index}`} ethUsdLog={log} />)}
*/

export const EthUsdLogsTable: React.FC<Props> = ({
  ethUsdLogs
}) => (
  <Table>
    <Thead>
      <Tr>
        <Th>ETHUSD_PERP</Th>
        <Th>ETHUSD_220930</Th>
        <Th>ETHUSD_221230</Th>
      </Tr>
    </Thead>
    <Tbody>
      {ethUsdLogs.sort((a, b) => b.timestamp - a.timestamp).map((ethUsdLog, index) => (
        <React.Fragment key={`EthUsdLogsTable-Tr-${index}`}>
          <Tr>
            <Td fontSize="12px" border="none" paddingBottom="4px" colSpan={3}>{(new Date(ethUsdLog.timestamp)).toLocaleString(undefined, {timeZoneName: 'short'})}</Td>
          </Tr>
          <Tr>
            <Td textAlign="center" paddingTop="0">${round2(ethUsdLog.markPrices.ETHUSD_PERP)}</Td>
            <Td textAlign="right" paddingTop="0" lineHeight="1.2em">
              ${round2(ethUsdLog.markPrices.ETHUSD_220930)}<br />
              <small>-${round2(ethUsdLog.markPrices.ETHUSD_PERP - ethUsdLog.markPrices.ETHUSD_220930)}</small><br />
              <small>{round2((1 - ethUsdLog.markPrices.ETHUSD_220930 / ethUsdLog.markPrices.ETHUSD_PERP) * 100.0)}%</small>
            </Td>
            <Td textAlign="right" paddingTop="0" lineHeight="1.2em">
              ${round2(ethUsdLog.markPrices.ETHUSD_221230)}<br />
              <small>-${round2(ethUsdLog.markPrices.ETHUSD_PERP - ethUsdLog.markPrices.ETHUSD_221230)}</small><br />
              <small>{round2((1 - ethUsdLog.markPrices.ETHUSD_221230 / ethUsdLog.markPrices.ETHUSD_PERP) * 100.0)}%</small>
            </Td>
          </Tr>
        </React.Fragment>
      ))}
    </Tbody>
  </Table>
)
