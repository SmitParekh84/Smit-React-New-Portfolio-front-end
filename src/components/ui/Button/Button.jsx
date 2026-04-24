import React, { forwardRef } from "react"
import "./Button.css"

/**
 * Shared Button component.
 *
 * Props:
 *  - variant: "tool" (default) | "landing" | "ghost" | "subtle" | "danger"
 *  - size:    "sm" | "md" (default) | "lg"
 *  - block:   boolean — full width
 *  - loading: boolean — shows spinner, disables button
 *  - leftIcon / rightIcon: ReactNode
 *  - as:      element/component override (e.g. "a", Link)
 *  - all native button props are forwarded
 */
const Button = forwardRef(function Button(
  {
    variant = "tool",
    size = "md",
    block = false,
    loading = false,
    leftIcon,
    rightIcon,
    className = "",
    children,
    disabled,
    as,
    type,
    ...rest
  },
  ref,
) {
  const Tag = as || "button"

  const classes = [
    "ds-btn",
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    block && "ds-btn--block",
    loading && "is-loading",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const nativeTypeProps = Tag === "button" ? { type: type || "button" } : {}

  return (
    <Tag
      ref={ref}
      className={classes}
      disabled={Tag === "button" ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      {...nativeTypeProps}
      {...rest}
    >
      {loading ? (
        <span className="ds-btn__spinner" aria-hidden="true" />
      ) : (
        leftIcon && <span className="ds-btn__icon">{leftIcon}</span>
      )}
      {children && <span className="ds-btn__label">{children}</span>}
      {!loading && rightIcon && (
        <span className="ds-btn__icon">{rightIcon}</span>
      )}
    </Tag>
  )
})

export default Button
