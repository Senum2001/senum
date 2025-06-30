'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SkillIconProps {
  src: string;
  alt: string;
  className?: string;
}

export function SkillIcon({ src, alt, className = 'size-12' }: SkillIconProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Fallback to a generic icon if the external icon fails to load
    return (
      <div
        className={`${className} flex items-center justify-center rounded-lg bg-gray-200`}
      >
        <span className="text-xs font-medium text-gray-600">
          {alt.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex rounded-lg bg-white p-2">
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        onError={() => setHasError(true)}
        style={{ filter: 'brightness(0) saturate(100%)' }}
        width={48}
        height={48}
      />
    </div>
  );
}
