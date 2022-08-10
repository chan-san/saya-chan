import React, { useEffect } from "react"
import { AppProps } from "next/app"
import {
  ChakraProvider,
  Box,
  Text,
  VStack
} from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo'
import { defaultConfig } from '@/lib/next-seo.config'
import theme from '@/styles/theme';
import TagManager from 'react-gtm-module'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    TagManager.initialize({ gtmId: '' });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...defaultConfig} />
      <Box textAlign="center" fontSize="xl">
        <VStack minH="100vh" spacing="0" maxWidth="600px" marginX="auto">
          <Component {...pageProps} />
          <VStack mt="10" py="2" px="4" fontSize="xs">
            <Text>&copy; 2022 chan-san</Text>
          </VStack>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
