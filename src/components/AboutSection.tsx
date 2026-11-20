import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#FAFAFA] text-[#0A0A0B] py-20 sm:py-28 border-y border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Studio Photography Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-[4/3]">
              <ResilientImage
                src={siteConfig.brand.studioPhoto}
                alt="Shaikho Bhai content creation studio in Dubai"
                fallbackTitle="Shaikho Bhai Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-600">
              <span>Creator Studio · Dubai & Pakistan</span>
              <span>Shaikh Adnan Official</span>
            </div>
          </motion.div>

          {/* Editorial Biography Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 text-sm font-medium text-[#9A7414] mb-3">
              <span>About Shaikho Bhai</span>
              <span aria-hidden="true">·</span>
              <span lang="ur" dir="rtl" className="font-urdu text-base">
                {siteConfig.brand.urduName}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A0A0B] text-balance mb-6 leading-tight">
              {siteConfig.biography.headline}
            </h2>

            <div className="space-y-4 text-neutral-700 text-base leading-relaxed max-w-[68ch]">
              {siteConfig.biography.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Clean Editorial Pillars */}
            <div className="mt-10 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {siteConfig.biography.pillars.map((pillar) => (
                <div key={pillar.index} className="space-y-2">
                  <p className="text-xs font-semibold text-[#9A7414] tabular-nums">{pillar.index}.</p>
                  <h3 className="text-base font-semibold text-[#0A0A0B]">{pillar.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
