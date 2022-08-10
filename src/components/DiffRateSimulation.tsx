import * as React from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption
} from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'

interface Props {
  value: string
  onChange: (value: string | string[]) => void
}

export const DiffRateSimulation: React.FC<Props> = ({
  value,
  onChange
}) => (
  <Menu closeOnSelect={true}>
    <MenuButton>
      <EditIcon cursor='pointer' />
    </MenuButton>
    <MenuList>
      <MenuOptionGroup defaultValue='' value={value} title='Simulation' type='radio' onChange={onChange}>
        <MenuItemOption value=''>None</MenuItemOption>
        <MenuItemOption value='0'>0%</MenuItemOption>
        <MenuItemOption value='0.05'>5%</MenuItemOption>
        <MenuItemOption value='0.1'>10%</MenuItemOption>
        <MenuItemOption value='0.15'>15%</MenuItemOption>
        <MenuItemOption value='0.2'>20%</MenuItemOption>
        <MenuItemOption value='0.25'>25%</MenuItemOption>
        <MenuItemOption value='0.3'>30%</MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
)
