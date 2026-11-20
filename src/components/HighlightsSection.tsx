import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const HighlightsSection: React.FC = () => {
  return (
    <section id="highlights" className="bg-[#070708] text-[#FAFAFA] py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#D4AF37] mb-3">
            Social Media Highlights · Featured Channels
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA] text-balance">
            Highlights Across Digital Platforms & Appearances
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.highlights.map((item, idx) => {
            const isExternal = item.actionUrl.startsWith('http');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-[#D4AF37]/45 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-5">
                    <span className="font-semibold text-[#D4AF37] tabular-nums">{item.index}.</span>
                    <span>
                      {item.platform} · {item.date}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#FAFAFA] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{item.summary}</p>
                </div>

                <div className="mt-7 pt-4 border-t border-white/10">
                  <a
                    href={item.actionUrl}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#E5C158] transition-colors whitespace-nowrap"
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
