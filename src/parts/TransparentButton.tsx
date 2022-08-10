import {
  ButtonProps,
  Button,
} from "@chakra-ui/react"

export type TransparentButtonProps = Omit<ButtonProps, "background" | "_hover" | "_active" | "_focus">

export const TransparentButton: React.FC<TransparentButtonProps> = (props) => {
  return (
    <Button
      background="transparent"
      _hover={{bg: '#fff2'}}
      _active={{bg: '#fff2'}}
      _focus={{boxShadow: 'none'}}
      {...props}
    />
  )
}
