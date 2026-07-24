'use client';

import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { LANGUAGES } from '@/lib/constants';

interface MobileNavProps {
  lang: string;
  navHome?: string;
  navBlog?: string;
  navCategories?: string;
  navAbout?: string;
  navContact?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({
  lang,
  navHome = 'Home',
  navBlog = 'Blog',
  navCategories = 'Categories',
  navAbout = 'About',
  navContact = 'Contact',
  isOpen,
  onClose,
}: MobileNavProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <div
        className={`mobile-overlay${isOpen ? ' show' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`mobile-nav${isOpen ? ' show' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-nav-header">
          <button className="mobile-nav-close" onClick={onClose} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav-links">
          <Link href={`/${lang}/`} onClick={onClose}>{navHome}</Link>
          <Link href={`/${lang}/blog/`} onClick={onClose}>{navBlog}</Link>
          <Link href={`/${lang}/categories/`} onClick={onClose}>{navCategories}</Link>
          <Link href={`/${lang}/about/`} onClick={onClose}>{navAbout}</Link>
          <Link href={`/${lang}/contact/`} onClick={onClose}>{navContact}</Link>
        </nav>
        <div className="mobile-nav-lang">
          <span className="mobile-nav-lang-label">Language</span>
          <div className="mobile-nav-lang-options">
            {LANGUAGES.map((langItem) => (
              <Link
                key={langItem.code}
                href={`/${langItem.code}/`}
                className={`mobile-lang-option${langItem.code === lang ? ' active' : ''}`}
                onClick={onClose}
              >
                <span>{langItem.flag}</span>
                <span>{langItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
