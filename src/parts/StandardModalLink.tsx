import { ReactNode } from "react"
import {
  LinkProps,
  Link,
  useDisclosure,
} from "@chakra-ui/react"
import { StandardModal } from "@/parts/StandardModal"

export type StandardModalLinkProps = Omit<LinkProps, "target" | "rel" | "href">

interface Props {
  label: string
  children: ReactNode
  title?: string
}

export const StandardModalLink: React.FC<StandardModalLinkProps & Props> = ({
  label,
  children,
  title,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    onOpen()
  }

  return <>
    <Link href='#' {...props} onClick={onClick}>
      {label}
    </Link>
    <StandardModal onClose={onClose} isOpen={isOpen} title={title}>{children}</StandardModal>
  </>
}
