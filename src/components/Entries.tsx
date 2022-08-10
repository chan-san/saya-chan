/* eslint-disable react/no-children-prop */

import {
  VStack,
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from "@chakra-ui/react"
import styles from "@/styles/Entries.module.scss"
import React from "react"

interface Props {

}

export const Entries: React.FC<Props> = ({
  
}) => (
  <VStack spacing="4" className={styles.container}>
    <HStack spacing="4">
      <Text className={styles.label}>ETHUSD_220930</Text>
      <InputGroup className={styles.inputGroup}>
        <InputLeftAddon children='price $' />
        <Input placeholder='1702.20' className={styles.entryPrice} />
      </InputGroup>
      <InputGroup className={styles.inputGroup}>
        <Input placeholder='100' />
        <InputRightAddon children='ETH' />
      </InputGroup>
    </HStack>
    <HStack spacing="4">
      <Text className={styles.label}>ETHUSD_221230</Text>
      <InputGroup className={styles.inputGroup}>
        <InputLeftAddon children='price $' />
        <Input placeholder='1692.20' className={styles.entryPrice} />
      </InputGroup>
      <InputGroup className={styles.inputGroup}>
        <Input placeholder='25' />
        <InputRightAddon children='ETH' />
      </InputGroup>
    </HStack>
    <HStack spacing="4">
      <Text className={styles.label}>ETHUSD_PERP</Text>
      <InputGroup className={styles.inputGroup}>
        <InputLeftAddon children='price $' />
        <Input placeholder='1712.84' className={styles.entryPrice} />
      </InputGroup>
      <InputGroup className={styles.inputGroup}>
        <Input placeholder='100' />
        <InputRightAddon children='ETH' />
      </InputGroup>
    </HStack>
    <HStack spacing="4">
      <Text className={styles.label}>Deposit</Text>
      <InputGroup className={styles.inputGroup}>
        <InputLeftAddon children='price $' />
        <Input placeholder='1712.84' className={styles.entryPrice} />
      </InputGroup>
      <InputGroup className={styles.inputGroup}>
        <Input placeholder='25' />
        <InputRightAddon children='ETH' />
      </InputGroup>
    </HStack>
    <Text color="#aa0000" fontSize="16px">Win $xxx,xxx</Text>
  </VStack>
)
