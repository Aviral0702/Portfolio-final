import React, { useEffect } from 'react';
import { trackPageView, trackScrollDepth } from '../config/analytics';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Track page views when component mounts
    trackPageView();
  }, []);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, and 100% scroll
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScrollDepth('25%');
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScrollDepth('50%');
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        trackScrollDepth('75%');
      } else if (scrollPercent >= 100) {
        trackScrollDepth('100%');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
