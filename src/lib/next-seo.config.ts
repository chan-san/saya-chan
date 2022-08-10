import { DefaultSeoProps } from 'next-seo'
const faviconImage = 'https://raw.githubusercontent.com/chan-san/saya-chan/main/public/ETH.png'
const ogImage = 'https://raw.githubusercontent.com/chan-san/saya-chan/main/public/megami03738.jpg'
const description = 'poweth-checker'
const siteName = 'Saya-chan ~poweth-checker~'

export const defaultConfig: DefaultSeoProps = {
  titleTemplate: `%s | ${siteName}`,
  defaultTitle: siteName,
  twitter: {
    cardType: 'summary'
  },
  languageAlternates: [
    {
      hrefLang: 'ja_JP',
      href: 'https://chan-san.github.io/saya-chan/'
    }
  ],
  additionalMetaTags: [
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1'
    },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
    },
    {
      name: 'keywords',
      content: 'poweth'
    },
    {
      name: 'description',
      content: description
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      sizes: '64x64',
      href: faviconImage,
      type: 'image/png'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    site_name: siteName,
    url: 'https://chan-san.github.io/saya-chan/',
    description,
    images: [
      {
        url: ogImage,
        width: 600,
        height: 600,
        secureUrl: ogImage
      }
    ]
  }
}
