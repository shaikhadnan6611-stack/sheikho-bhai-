import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { PlatformIcon, WhatsAppLogo } from './BrandIcons';

export const Footer: React.FC = () => {
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowFloatingTop(window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#070708] text-[#FAFAFA] border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Summary */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-semibold text-[#FAFAFA]">
                  {siteConfig.brand.name}
                </span>
                <span lang="ur" dir="rtl" className="font-urdu text-xl text-[#D4AF37]">
                  {siteConfig.brand.urduName}
                </span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                Official personal branding website of {siteConfig.brand.fullName} (Shaikho Bhai).
                Verified social media channels, stories, and direct contact lines.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <p className="text-xs font-semibold text-[#D4AF37] mb-4">Navigation</p>
              <ul className="space-y-2.5 text-sm text-neutral-300">
                <li>
                  <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#socials" className="hover:text-[#D4AF37] transition-colors">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#videos" className="hover:text-[#D4AF37] transition-colors">
                    Latest Videos
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons & Direct Info */}
            <div className="md:col-span-4">
              <p className="text-xs font-semibold text-[#D4AF37] mb-4">Connect & Follow</p>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                {siteConfig.socialProfiles.map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.name} (${profile.handle})`}
                    className="w-11 h-11 rounded-lg bg-[#111115] border border-white/10 hover:border-[#D4AF37] text-neutral-200 hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                  >
                    <PlatformIcon platform={profile.id} className="w-5 h-5" />
                  </a>
                ))}
                <a
                  href={siteConfig.contact.phones[0].whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message on WhatsApp"
                  className="w-11 h-11 rounded-lg bg-[#111115] border border-white/10 hover:border-[#D4AF37] text-neutral-200 hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                </a>
              </div>

              <p className="text-xs text-neutral-400 tabular-nums">
                PK: +923001200734 · UAE: +971505007201
              </p>
              <p className="text-xs text-neutral-400 mt-1">{siteConfig.contact.email}</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>
              © {new Date().getFullYear()} {siteConfig.brand.name} ({siteConfig.brand.fullName}). All
              rights reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="min-h-[40px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#FAFAFA] hover:text-[#D4AF37] border border-white/15 hover:border-[#D4AF37] rounded-md transition-colors whitespace-nowrap"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Discreet Floating Back to Top Button */}
      {showFloatingTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-30 w-11 h-11 rounded-full bg-[#D4AF37] text-[#070708] hover:bg-[#E5C158] shadow-lg flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
