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
        {[0, 1, 2, 3, 4, 5, 10, 15, 20, 30].map(rate => (
          <MenuItemOption key={`DiffRateSimulation-${rate}`} value={String(rate/100)}>{rate}%</MenuItemOption>
        ))}
      </MenuOptionGroup>
    </MenuList>
  </Menu>
)
