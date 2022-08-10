import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
}

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#ffffff', '#1A202C')(props),
      fontSize: '12px'
    },
    a: {
      color: mode('#5635B4', '#ffffff')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: any) => ({
      // dialog: {
      //   bg: mode('#ffffff', '#1A202C')(props),
      // },
    }),
  },
  Link: {
    baseStyle: (props: any) => ({
      textDecoration: 'underline',
      fontWeight: 'bold',
      color: styles.global(props).a.color
    })
  },
  Text: {
    baseStyle: (props: any) => ({
      fontSize: '12px'
    })
  }
};


const theme = extendTheme({
  components,
  styles,
  config
})

export default theme
