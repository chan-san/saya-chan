import {
  LinkProps,
  Link,
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
      >{props.href}</Link>
    ) : (
      <Link
        target="_blank"
        rel="noopener"
        {...props}
      />
    )
  )
}
