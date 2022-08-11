interface Props {
  digit?: number
  hasSign?: boolean
  prefix?: string
}

export const formatNumber: (value: number, props?: Props) => string = (value, props) => {
  const digit = props?.digit ?? 2
  const hasSign = props?.hasSign ?? false
  const prefix = props?.prefix ?? ''

  const d = 10 ** digit
  let text = (Math.round(value * d) / d).toLocaleString()
  if (digit > 0) {
    if (!text.includes('.')) {
      text += '.'
    }
    text += '0'.repeat(digit - (text.split('.')[1]?.length || 0))
  }
  const sign = hasSign && value > 0 ? '+' : ''

  return `${sign}${prefix || ''}${text}`
}
