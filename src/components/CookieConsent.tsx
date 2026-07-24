'use client';

import { useState, useEffect } from 'react';

interface CookieConsentProps {
  lang: string;
  text?: string;
  acceptLabel?: string;
}

export default function CookieConsent({
  lang,
  text = 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
  acceptLabel = 'Accept',
}: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="alert">
      <div className="cookie-consent-inner">
        <p className="cookie-consent-text">{text}</p>
        <div className="cookie-consent-actions">
          <button className="cookie-consent-btn" onClick={handleAccept}>
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
