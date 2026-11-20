import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { PlatformIcon } from './BrandIcons';

export const SocialHubSection: React.FC = () => {
  return (
    <section id="socials" className="bg-[#070708] text-[#FAFAFA] py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#D4AF37] mb-3">
            Official Social Media · Verified Links
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA] text-balance mb-4">
            Follow Shaikho Bhai Across Every Official Platform
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed">
            Connect directly through the official profiles below. Every link opens in a new tab and
            is managed centrally so you always reach the authentic channel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.socialProfiles.map((profile, idx) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between p-6 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#17171C] border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#070708] transition-colors duration-200">
                    <PlatformIcon platform={profile.id} className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#FAFAFA] mb-1">
                  {profile.name}
                </h3>
                <p className="text-xs font-medium text-[#D4AF37] mb-3">
                  {profile.handle}
                  {profile.verifiedPrimary ? ' · Primary Official Page' : ''}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">{profile.tagline}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors">
                <span className="whitespace-nowrap">{profile.ctaLabel}</span>
                <span aria-hidden="true">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
