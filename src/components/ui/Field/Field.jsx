import React, { forwardRef, useId } from "react"
import "./Field.css"

/* ── helpers ─────────────────────────────────────────────────────────── */
const cx = (...parts) => parts.filter(Boolean).join(" ")

/* ==========================================================================
   Field — wrapper that provides label + hint + error semantics
   ========================================================================== */
export const Field = ({
  label,
  labelIcon,
  hint,
  error,
  required,
  htmlFor,
  children,
  className = "",
  counter, // { value: number, max: number }
  labelExtra, // custom element rendered right of the label
  ...rest
}) => {
  const autoId = useId()
  const fieldId = htmlFor || autoId

  // Inject id + aria into single child input/textarea/select if it exists
  const enhancedChild = React.isValidElement(children)
    ? React.cloneElement(children, {
        id: children.props.id || fieldId,
        "aria-invalid": error ? "true" : children.props["aria-invalid"],
        "aria-describedby":
          [
            children.props["aria-describedby"],
            hint ? `${fieldId}-hint` : null,
            error ? `${fieldId}-err` : null,
          ]
            .filter(Boolean)
            .join(" ") || undefined,
      })
    : children

  return (
    <div className={cx("ds-field", error && "is-invalid", className)} {...rest}>
      {(label || counter || labelExtra) && (
        <div className="ds-field__row">
          {label && (
            <label className="ds-field__label" htmlFor={fieldId}>
              {labelIcon && (
                <span className="ds-field__label-icon">{labelIcon}</span>
              )}
              {label}
              {required && (
                <span className="ds-field__required" aria-hidden="true">
                  *
                </span>
              )}
            </label>
          )}
          {labelExtra}
          {counter && (
            <span className="ds-field__counter">
              {counter.value}
              {counter.max ? `/${counter.max}` : ""}
            </span>
          )}
        </div>
      )}

      {enhancedChild}

      {hint && !error && (
        <div id={`${fieldId}-hint`} className="ds-field__hint">
          {hint}
        </div>
      )}
      {error && (
        <div id={`${fieldId}-err`} className="ds-field__error" role="alert">
          {error}
        </div>
      )}
    </div>
  )
}

/* ==========================================================================
   Input — text/email/password/number/search/etc.
   Supports leftIcon / rightIcon addons
   ========================================================================== */
export const Input = forwardRef(function Input(
  { size = "md", leftIcon, rightIcon, className = "", type = "text", ...rest },
  ref,
) {
  const control = (
    <input
      ref={ref}
      type={type}
      className={cx(
        "ds-control",
        size !== "md" && `ds-control--${size}`,
        className,
      )}
      {...rest}
    />
  )

  if (!leftIcon && !rightIcon) return control

  return (
    <div
      className={cx(
        "ds-input-group",
        leftIcon && "ds-input-group--has-left",
        rightIcon && "ds-input-group--has-right",
      )}
    >
      {leftIcon && (
        <span className="ds-input-group__addon ds-input-group__addon--left">
          {leftIcon}
        </span>
      )}
      {control}
      {rightIcon && (
        <span className="ds-input-group__addon ds-input-group__addon--right">
          {rightIcon}
        </span>
      )}
    </div>
  )
})

/* ==========================================================================
   Textarea
   ========================================================================== */
export const Textarea = forwardRef(function Textarea(
  { size = "md", rows = 4, className = "", ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cx(
        "ds-control",
        size !== "md" && `ds-control--${size}`,
        className,
      )}
      {...rest}
    />
  )
})

/* ==========================================================================
   Select — accepts options=[{value,label}] OR children (<option>)
   ========================================================================== */
export const Select = forwardRef(function Select(
  { size = "md", options, placeholder, className = "", children, ...rest },
  ref,
) {
  return (
    <select
      ref={ref}
      className={cx(
        "ds-control",
        size !== "md" && `ds-control--${size}`,
        className,
      )}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options
        ? options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))
        : children}
    </select>
  )
})

/* ==========================================================================
   Range — styled slider with filled progress track
   ========================================================================== */
export const Range = forwardRef(function Range(
  { min = 0, max = 100, value = 0, className = "", style, ...rest },
  ref,
) {
  const pct =
    ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100
  return (
    <input
      ref={ref}
      type="range"
      min={min}
      max={max}
      value={value}
      className={cx("ds-range", className)}
      style={{ "--_value": `${pct}%`, ...style }}
      {...rest}
    />
  )
})

/* ==========================================================================
   Switch (toggle)
   ========================================================================== */
export const Switch = forwardRef(function Switch(
  { checked, onChange, disabled, className = "", ...rest },
  ref,
) {
  return (
    <label className={cx("ds-switch", className)}>
      <input
        ref={ref}
        type="checkbox"
        checked={!!checked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <span className="ds-switch__slider" />
    </label>
  )
})

/* ==========================================================================
   Checkbox & Radio labels
   ========================================================================== */
export const Checkbox = forwardRef(function Checkbox(
  { label, className = "", ...rest },
  ref,
) {
  return (
    <label className={cx("ds-check", className)}>
      <input ref={ref} type="checkbox" {...rest} />
      {label && <span>{label}</span>}
    </label>
  )
})

export const Radio = forwardRef(function Radio(
  { label, className = "", ...rest },
  ref,
) {
  return (
    <label className={cx("ds-check", className)}>
      <input ref={ref} type="radio" {...rest} />
      {label && <span>{label}</span>}
    </label>
  )
})

export default Field
