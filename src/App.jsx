import Hero from './components/Hero'
import EventCarousel from './components/EventCarousel'
import HowToJoin from './components/HowToJoin'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="bg-ink overflow-x-hidden">
      <Hero />
      <EventCarousel />
      <HowToJoin />
      {/* 18+ notice */}
      <p className="text-center font-body text-ice/20 text-xs px-6 py-6 leading-relaxed pb-24">
        仅限18+。负责任博彩。i88支持负责任博彩。
        马来西亚热线：1-800-88-3151
      </p>
      <StickyCTA />
    </div>
  )
}
