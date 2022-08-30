export type Symbol =
  | 'ADAUSD_220930'
  | 'ADAUSD_221230'
  | 'ADAUSD_PERP'

export type AdaUsdData = {
  timestamp: number
  markPrices: {
    [key in Symbol]: number
  }
}
