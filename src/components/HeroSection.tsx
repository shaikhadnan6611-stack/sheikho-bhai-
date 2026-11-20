import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

const HERO_STRIP = [
  { label: 'Official Identity', value: 'Shaikh Adnan · Shaikho Bhai' },
  { label: 'Regional Presence', value: 'Pakistan & United Arab Emirates' },
  { label: 'Primary Hub', value: 'Facebook, YouTube, TikTok & Instagram' },
  { label: 'Direct Desk', value: '+92 300 1200734 · +971 50 500 7201' },
];

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative bg-[#070708] text-[#FAFAFA] pt-10 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Subtle architectural ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[520px] h-[520px] rounded-full bg-[#D4AF37]/8 blur-[140px]"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Typographic Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-8"
          >
            {/* Bilingual Name Lockup (Clean unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base text-[#D4AF37] font-medium mb-5">
              <span>{siteConfig.brand.name}</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span lang="ur" dir="rtl" className="font-urdu text-lg sm:text-xl leading-none">
                {siteConfig.brand.urduName}
              </span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="text-neutral-400 text-sm">{siteConfig.brand.fullName}</span>
            </div>

            <h1 className="font-display font-semibold text-balance text-[clamp(2.4rem,4.5vw,4.15rem)] leading-[1.06] tracking-tight text-[#FAFAFA] mb-6">
              {siteConfig.brand.heroHeading}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mb-9">
              {siteConfig.brand.heroDescription} Discover verified channels, latest video stories,
              curated photography, and direct contact lines for Pakistan and the UAE.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#socials"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-[#070708] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
              >
                <span>Follow Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-[#FAFAFA] bg-transparent border border-white/25 hover:border-[#D4AF37] hover:text-[#D4AF37] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#0E0E11] aspect-[3/4] lg:aspect-auto lg:min-h-[540px]">
              <ResilientImage
                src={siteConfig.brand.heroPortrait}
                alt="Official portrait of Shaikho Bhai (Shaikh Adnan)"
                fallbackTitle={siteConfig.brand.name}
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
              {/* Measured gradient scrim for subtle editorial caption at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6">
                <p className="font-display text-2xl font-semibold text-[#FAFAFA] leading-tight">
                  {siteConfig.brand.name}{' '}
                  <span lang="ur" dir="rtl" className="font-urdu text-[#D4AF37] text-xl ms-2">
                    {siteConfig.brand.urduName}
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Social Media Personality · Content Creator
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Identity Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_STRIP.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs font-medium text-[#D4AF37]">{item.label}</p>
              <p className="text-sm text-neutral-200 font-medium tabular-nums">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
