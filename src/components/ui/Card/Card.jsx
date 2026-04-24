import React, { forwardRef } from "react"
import "./Card.css"

/**
 * Shared Card primitive.
 * Props:
 *  - variant: "default" | "elevated" | "glass" | "accent"
 *  - padding: "none" | "sm" | "md" (default) | "lg"
 *  - interactive: boolean — hover lift + cursor pointer
 *  - as: element override (default "div")
 */
export const Card = forwardRef(function Card(
  {
    variant = "default",
    padding = "md",
    interactive = false,
    as: Tag = "div",
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const classes = [
    "ds-card",
    variant !== "default" && `ds-card--${variant}`,
    `ds-card--pad-${padding}`,
    interactive && "ds-card--interactive",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
})

export const CardHeader = ({ className = "", ...rest }) => (
  <div className={`ds-card__header ${className}`.trim()} {...rest} />
)

export const CardTitle = ({ as: Tag = "h3", className = "", ...rest }) => (
  <Tag className={`ds-card__title ${className}`.trim()} {...rest} />
)

export const CardSubtitle = ({ className = "", ...rest }) => (
  <p className={`ds-card__subtitle ${className}`.trim()} {...rest} />
)

export const CardBody = ({ className = "", ...rest }) => (
  <div className={`ds-card__body ${className}`.trim()} {...rest} />
)

export const CardFooter = ({ className = "", ...rest }) => (
  <div className={`ds-card__footer ${className}`.trim()} {...rest} />
)

export default Card
