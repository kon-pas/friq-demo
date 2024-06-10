import { motion } from 'framer-motion'

export default function GradientIframe() {
  return (
    <motion.iframe
      src="/gradient/index.html"
      title="dynamic gradient"
      style={{
        width: '100%',
        height: '100%',
        // height: '640px',
        border: 'none',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
    />
  )
}
