import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle = 'Shaikho Bhai',
  className = 'w-full h-full object-cover',
  containerClassName = '',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#141418] via-[#0B0B0D] to-[#1A160B] border border-[#D4AF37]/20 text-center p-6 ${containerClassName}`}
      >
        <Camera className="w-7 h-7 text-[#D4AF37] mb-3" strokeWidth={1.5} />
        <span className="font-display text-lg text-[#FAFAFA] tracking-tight">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
