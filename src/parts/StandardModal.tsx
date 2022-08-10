import { ReactNode, useEffect, useState } from "react"
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  //ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react"


interface Props {
  onClose: () => void
  isOpen: boolean
  children: ReactNode
  maxWidth?: string
  padding?: string
  title?: string
}

export const StandardModal: React.FC<Props> = ({
  onClose,
  isOpen,
  maxWidth,
  children,
  padding,
  title
}) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.500'
      //backdropFilter='blur(2px)'
    />
  )

  const [overlay] = useState(<OverlayOne />)

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent maxWidth={maxWidth} padding={padding || "0"}>
        {title && <ModalHeader textAlign="center" paddingBottom="0" fontSize="14px">{title}</ModalHeader>}
        {/*<ModalCloseButton />*/}
        <ModalBody padding="0">{children}</ModalBody>
        <ModalFooter marginTop={padding} padding="0" justifyContent="center">
          <Button onClick={onClose} width="100%" fontSize="14px">閉じる</Button>
          {<input type='button' value='hoge' tabIndex={1} style={{position: "absolute", zIndex: -1, opacity: 0}} /> /* dummy input for capture focus */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
