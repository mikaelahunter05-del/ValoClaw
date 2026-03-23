import { motion } from 'framer-motion'
import { Twitter, Linkedin } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function SocialProof() {
  return (
    <section id="about" className="bg-bg py-16 md:py-20 lg:py-24 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <SectionLabel>Who&apos;s Behind This</SectionLabel>
        </div>

        {/* Two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center mt-8"
        >
          {/* Left - Photo */}
          <div className="max-w-sm mx-auto w-full">
            <div className="relative rounded-[1.25rem] border-[0.75px] border-[#222222] p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/video/Owner-Photo.jpeg"
                  alt="Kyle Holland, Founder of ValoClaw"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right - Bio */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Kyle Holland
            </h3>
            <p className="text-sm text-[#b0b0b0] mt-1">
              Founder, ValoClaw &middot; Head of Operations &amp; Systems, VigilaMed
            </p>

            <div className="space-y-4 mt-6">
              <p className="text-sm text-[#b0b0b0] leading-relaxed">
                12 years building operational infrastructure for businesses, from
                &pound;40M professional services firms to regulated medical device
                manufacturers. CRM implementations, workflow automation,
                AI-assisted research pipelines, digital transformation across the
                UK and Europe.
              </p>
              <p className="text-sm text-[#b0b0b0] leading-relaxed">
                When OpenClaw launched, I saw the same pattern I&apos;ve seen my
                entire career: a powerful tool that most people can&apos;t
                implement properly. The security gaps. The broken configs. The
                wasted weekends on YouTube tutorials. I&apos;ve deployed these
                systems from the ground up. I film every build so you can watch
                the exact process before you spend a penny.
              </p>
              <p className="text-sm text-[#b0b0b0] leading-relaxed">
                ValoClaw exists because founders shouldn&apos;t need to become
                DevOps engineers to get an AI assistant. You text your AI and it
                handles the rest. That&apos;s what I build.
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://x.com/clawvalo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-valo transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/theaicapitalist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-valo transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 flex justify-center gap-8 md:gap-16 text-center"
        >
          <div>
            <div className="font-mono text-3xl font-bold text-white">12+</div>
            <div className="text-xs text-[#888888] uppercase tracking-wide mt-1">
              Years Building Operations Infrastructure
            </div>
          </div>
          <div>
            <div className="font-heading text-xl font-bold text-white">
              Every Build
            </div>
            <div className="text-xs text-[#888888] uppercase tracking-wide mt-1">
              Filmed &amp; Documented
            </div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-[#888888] uppercase tracking-wide mt-1">
              Satisfaction Guarantee or Full Refund
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
