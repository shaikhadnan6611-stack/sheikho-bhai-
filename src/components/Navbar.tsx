import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Socials', href: '#socials' },
  { label: 'Videos', href: '#videos' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#070708]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#FAFAFA] hover:text-[#D4AF37] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          {siteConfig.brand.name}
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#socials"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-wide text-[#070708] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
          >
            Follow Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#FAFAFA] hover:text-[#D4AF37] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0C]">
          <nav aria-label="Mobile Navigation" className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center px-3 text-base font-medium text-neutral-200 hover:text-[#D4AF37] hover:bg-white/5 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#socials"
              onClick={() => setMobileOpen(false)}
              className="mt-2 min-h-[44px] flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#070708] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-colors"
            >
              Follow Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
