import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoBar from '@/components/LogoBar'
import Stats from '@/components/Stats'
import Solutions from '@/components/Solutions'
import Programs from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import { CTA, Footer } from '@/components/CTAFooter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <Stats />
      <Solutions />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
