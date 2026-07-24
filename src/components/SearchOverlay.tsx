'use client';

import { useEffect, useRef, useCallback } from 'react';

interface SearchOverlayProps {
  lang: string;
  searchPlaceholder?: string;
  searchTitle?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({
  lang,
  searchPlaceholder = 'Search IPTV articles...',
  searchTitle = 'Search',
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <div className={`search-overlay${isOpen ? ' show' : ''}`} role="dialog" aria-modal="true">
      <div className="search-overlay-content">
        <div className="search-overlay-header">
          <h2 className="search-overlay-title">{searchTitle}</h2>
          <button className="search-overlay-close" onClick={onClose} aria-label="Close search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="search-overlay-input-wrap">
          <svg className="search-overlay-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            id="searchOverlayInput"
            type="text"
            className="search-overlay-input"
            placeholder={searchPlaceholder}
            autoComplete="off"
          />
        </div>

        <div ref={resultsRef} className="search-overlay-results" />
      </div>
    </div>
  );
}
