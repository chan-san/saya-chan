import React, { useEffect } from "react"
import { AppProps } from "next/app"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  HStack,
  Image
} from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo'
import { defaultConfig } from '@/lib/next-seo.config'
import theme from '@/styles/theme';
import TagManager from 'react-gtm-module'
import { FaTwitter, FaGithub } from "react-icons/fa"
import { ExternalLink } from "@/parts"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W9P82FB' });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...defaultConfig} />
      <Box textAlign="center" maxWidth="600px" marginX="auto">
        <Component {...pageProps} />
        <VStack p="20px" fontSize="xs">
          <Text>&copy; 2022 chan-san</Text>
          <HStack spacing="2em"><ExternalLink color="inherit" href="https://twitter.com/chan_san_jp"><FaTwitter /></ExternalLink><ExternalLink color="inherit" href="https://github.com/chan-san/saya-chan"><FaGithub /></ExternalLink></HStack>
        </VStack>
      </Box>
      <Image src={"https://raw.githubusercontent.com/chan-san/saya-chan/main/public/megami03738.jpg"} width="100vw" maxWidth="600px" alt="MEGAMI" position="fixed" bottom="0" right="0" zIndex="-100" opacity=".05" />
    </ChakraProvider>
  )
}

export default MyApp
