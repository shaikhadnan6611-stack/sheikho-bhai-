/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SocialHubSection } from './components/SocialHubSection';
import { VideosSection } from './components/VideosSection';
import { GallerySection } from './components/GallerySection';
import { HighlightsSection } from './components/HighlightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Keep canonical link aligned with current origin when deployed dynamically
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl && typeof window !== 'undefined') {
      const currentOriginUrl = `${window.location.origin}${window.location.pathname}`;
      if (window.location.hostname !== 'localhost') {
        canonicalEl.href = currentOriginUrl;
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#070708] text-[#FAFAFA]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SocialHubSection />
        <VideosSection />
        <GallerySection />
        <HighlightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
