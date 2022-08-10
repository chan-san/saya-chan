export type Symbol =
  | 'ETHUSD_220930'
  | 'ETHUSD_221230'
  | 'ETHUSD_PERP'

export type EthUsdLog = {
  timestamp: number
  markPrices: {
    [key in Symbol]: number
  }
}

export const ethUsdData: Array<EthUsdLog> = [
	{
		"timestamp": 1659876000000,
		"markPrices": {
			"ETHUSD_220930": 1685.21,
			"ETHUSD_221230": 1657.74,
			"ETHUSD_PERP": 1695.48
		}
	},
	{
		"timestamp": 1659918480000,
		"markPrices": {
			"ETHUSD_220930": 1701.12,
			"ETHUSD_221230": 1670.14,
			"ETHUSD_PERP": 1713.06
		}
	},
	{
		"timestamp": 1659958140000,
		"markPrices": {
			"ETHUSD_220930": 1759.54,
			"ETHUSD_221230": 1725.68,
			"ETHUSD_PERP": 1770.68
		}
	},
	{
		"timestamp": 1660011359005,
		"markPrices": {
			"ETHUSD_220930": 1749.55833019,
			"ETHUSD_221230": 1716.1359141,
			"ETHUSD_PERP": 1763.00310968
		}
	},
	{
		"timestamp": 1660015568000,
		"markPrices": {
			"ETHUSD_220930": 1767.02965781,
			"ETHUSD_221230": 1733.11187096,
			"ETHUSD_PERP": 1778.60633566
		}
	},
	{
		"timestamp": 1660023193000,
		"markPrices": {
			"ETHUSD_220930": 1765.61334977,
			"ETHUSD_221230": 1731.67510727,
			"ETHUSD_PERP": 1777.46
		}
	},
	{
		"timestamp": 1660030732000,
		"markPrices": {
			"ETHUSD_220930": 1766.23133355,
			"ETHUSD_221230": 1732.50568173,
			"ETHUSD_PERP": 1778.66134592
		}
	},
	{
		"timestamp": 1660033794011,
		"markPrices": {
			"ETHUSD_220930": 1762.1691233,
			"ETHUSD_221230": 1729.53547366,
			"ETHUSD_PERP": 1775.01
		}
	},
	{
		"timestamp": 1660035110007,
		"markPrices": {
			"ETHUSD_220930": 1759.99895697,
			"ETHUSD_221230": 1727.46384171,
			"ETHUSD_PERP": 1772.79841934
		}
	},
	{
		"timestamp": 1660041561000,
		"markPrices": {
			"ETHUSD_220930": 1701.97870154,
			"ETHUSD_221230": 1670.12141351,
			"ETHUSD_PERP": 1718.55
		}
	},
	{
		"timestamp": 1660042740000,
		"markPrices": {
			"ETHUSD_220930": 1693.39409733,
			"ETHUSD_221230": 1662.34731488,
			"ETHUSD_PERP": 1714.46
		}
	},
	{
		"timestamp": 1660046882000,
		"markPrices": {
			"ETHUSD_220930": 1675.91510453,
			"ETHUSD_221230": 1644.30946564,
			"ETHUSD_PERP": 1700.53502268
		}
	},
	{
		"timestamp": 1660049921015,
		"markPrices": {
			"ETHUSD_220930": 1683.45679473,
			"ETHUSD_221230": 1652.8187686,
			"ETHUSD_PERP": 1706.84512007
		}
	},
	{
		"timestamp": 1660051492012,
		"markPrices": {
			"ETHUSD_220930": 1688.01662488,
			"ETHUSD_221230": 1657.00655455,
			"ETHUSD_PERP": 1711.3
		}
	},
	{
		"timestamp": 1660060330009,
		"markPrices": {
			"ETHUSD_220930": 1661.17874813,
			"ETHUSD_221230": 1631.51887466,
			"ETHUSD_PERP": 1686.24031559
		}
	}
]
