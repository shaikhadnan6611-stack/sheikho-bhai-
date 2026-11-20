import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Play, X } from 'lucide-react';
import { siteConfig, type VideoRelease } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

type VideoCategory = 'All' | VideoRelease['category'];

const CATEGORIES: VideoCategory[] = ['All', 'Lifestyle & Travel', 'Studio Talks', 'Highlights'];

export const VideosSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoRelease | null>(null);

  const filteredVideos =
    activeCategory === 'All'
      ? siteConfig.videos
      : siteConfig.videos.filter((video) => video.category === activeCategory);

  return (
    <section id="videos" className="bg-[#0B0B0D] text-[#FAFAFA] py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#D4AF37] mb-3">Latest Videos · Featured</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA] text-balance">
              Watch Recent Stories & Studio Sessions
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter videos by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#141418] border border-white/10 self-start"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[36px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#070708] font-semibold'
                      : 'text-neutral-300 hover:text-[#FAFAFA]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredVideos.map((video, idx) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl overflow-hidden bg-[#121215] border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-200 flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(video)}
                className="relative aspect-video w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
                aria-label={`Preview ${video.title}`}
              >
                <ResilientImage
                  src={video.thumbnail}
                  alt={video.title}
                  fallbackTitle={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-[#070708]/80 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#070708] transition-colors duration-200">
                    <Play className="w-5 h-5 fill-current ms-0.5" />
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 text-xs font-medium text-[#FAFAFA] bg-black/75 px-2 py-0.5 rounded tabular-nums">
                  {video.duration}
                </span>
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span className="text-[#D4AF37] font-medium">{video.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{video.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{video.location}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#FAFAFA] leading-snug mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{video.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="text-xs font-semibold text-[#FAFAFA] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
                  >
                    Episode Details
                  </button>
                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#E5C158] transition-colors whitespace-nowrap"
                  >
                    <span>Watch Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Video Preview Modal */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-2xl rounded-xl bg-[#111114] border border-[#D4AF37]/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black">
              <ResilientImage
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                fallbackTitle={selectedVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video preview"
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/75 text-[#FAFAFA] hover:text-[#D4AF37] border border-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-neutral-200">
                <span>
                  {selectedVideo.category} · {selectedVideo.location}
                </span>
                <span className="tabular-nums">{selectedVideo.duration}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 id="video-modal-title" className="font-display text-2xl sm:text-3xl font-semibold text-[#FAFAFA] mb-3">
                {selectedVideo.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {selectedVideo.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <span className="text-xs text-neutral-400">
                  Available on {selectedVideo.platformName}
                </span>
                <a
                  href={selectedVideo.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-[#070708] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-colors whitespace-nowrap"
                >
                  <span>Open Official Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
