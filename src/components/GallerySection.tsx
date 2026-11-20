import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const GallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos = siteConfig.gallery;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, photos.length]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section id="gallery" className="bg-[#FFFFFF] text-[#0A0A0B] py-20 sm:py-28 border-y border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#9A7414] mb-3">Photo Gallery · Curated Frames</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A0A0B] text-balance">
              Editorial Portraits & Behind the Lens
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm">
            Select any photograph to inspect full-screen with location details and editorial notes.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {photos.map((photo, index) => {
            const spanClass =
              index === 0
                ? 'md:col-span-5 md:row-span-2 min-h-[380px] md:min-h-[520px]'
                : index === 1 || index === 2
                  ? 'md:col-span-7 md:row-span-1 min-h-[250px]'
                  : 'md:col-span-6 min-h-[260px]';

            return (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7414] ${spanClass}`}
              >
                <ResilientImage
                  src={photo.src}
                  alt={photo.alt}
                  fallbackTitle={photo.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-[#FAFAFA] border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-xs text-[#E5C158] font-medium mb-1">
                    {photo.location} · {photo.date}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#FAFAFA]">
                    {photo.title}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-[#FAFAFA]">
              <div className="text-xs sm:text-sm text-neutral-300 tabular-nums">
                {activeIndex + 1} / {photos.length} · {activePhoto.location}
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close photo lightbox"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#070708] text-[#FAFAFA] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-[#0E0E11] border border-white/15 max-h-[72vh] flex items-center justify-center">
              <ResilientImage
                src={activePhoto.src}
                alt={activePhoto.alt}
                fallbackTitle={activePhoto.title}
                className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
              />

              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex - 1 + photos.length) % photos.length)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 border border-white/20 text-[#FAFAFA] hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % photos.length)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 border border-white/20 text-[#FAFAFA] hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl font-semibold text-[#FAFAFA]">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-1">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
