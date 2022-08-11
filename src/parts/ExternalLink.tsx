import {
  LinkProps,
  Link,
  Text
} from "@chakra-ui/react"

export type ExternalLinkProps = Omit<LinkProps, "target" | "rel">

interface Props {
  linkAsText?: boolean
}

export const ExternalLink: React.FC<ExternalLinkProps & Props> = ({
  linkAsText,
  ...props
}) => {
  return (
    linkAsText ? (
      <Link
        target="_blank"
        rel="noopener"
        {...props}
      ><Text>{props.href}</Text></Link>
    ) : (
      <Link
        target="_blank"
        rel="noopener"
        {...props}
      />
    )
  )
}
