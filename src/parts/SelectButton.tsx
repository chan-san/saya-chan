import * as React from "react"
import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  StackDivider
} from "@chakra-ui/react"

const RadioCard: React.FC<any> = ({
  ...props
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        //borderWidth='0.5px'
        //borderRadius='md'
        //boxShadow='md'
        _checked={{
          bg: 'gray.600',
          color: 'white',
        }}
        // _focus={{
        //   boxShadow: 'outline',
        // }}
        py="1"
        px="0"
        w="2em"
        fontSize="10px"
        lineHeight="1em"
      >
        {props.children}
      </Box>
    </Box>
  )
}

interface Props {
  onChange: any
  options: string []
}
export const SelectButton: React.FC<Props> = ({
  onChange,
  options
}) => {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'sort',
    defaultValue: options[0],
    onChange,
  })

  const group = getRootProps()

  return (
    <HStack {...group} spacing="0" borderRadius='md' overflow='hidden' borderWidth='1px' divider={<StackDivider />} textAlign="center" display="inline-flex">
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}
