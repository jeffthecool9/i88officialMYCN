import { motion } from 'framer-motion'
import { trackEvent } from '../utils/tracking'
import PremiumButton from './PremiumButton'

export default function StickyCTA() {
  return (
    <motion.div
      className="sticky-glass fixed bottom-0 left-0 right-0 z-50 px-4 py-3"
      initial={{ y: 72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full flex items-center gap-3">

        <div className="hidden sm:block flex-1 min-w-0">
          <p className="font-body font-semibold text-ice text-sm tracking-wide leading-tight truncate">
            世界杯 2026
          </p>
          <p className="font-body text-ice/35 text-xs truncate">
            存款RM100 · 获得188 FS
          </p>
        </div>

        <PremiumButton
          size="sm"
          onClick={() => { trackEvent('sticky_cta_click', { section: 'sticky_bar' }); window.open('https://www.palacehub8.com/rKCyjReN', '_blank') }}
          wrapperClassName="flex-1 sm:flex-none"
          className="w-full"
        >
          立即加入
        </PremiumButton>
      </div>
    </motion.div>
  )
}
