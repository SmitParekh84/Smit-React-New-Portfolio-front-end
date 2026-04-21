import { motion } from "framer-motion"
import { fadeUp } from "./variants"

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const MotionSection = ({
  children,
  variant = fadeUp,
  className = "",
  as: Tag = "div",
  delay = 0,
  ...props
}) => {
  const MotionTag = motion[Tag] || motion.div

  if (prefersReducedMotion) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export default MotionSection
