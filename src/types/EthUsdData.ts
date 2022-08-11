export type Symbol =
  | 'ETHUSD_220930'
  | 'ETHUSD_221230'
  | 'ETHUSD_PERP'

export type EthUsdData = {
  timestamp: number
  markPrices: {
    [key in Symbol]: number
  }
}