import { useEffect } from "react";
import { initGA, trackPageView, trackScrollDepth } from "../config/analytics";

const GoogleAnalytics = () => {
  useEffect(() => {
    initGA();
    trackPageView();

    const onNavigate = () => {
      trackPageView(document.title, window.location.pathname + window.location.hash);
    };

    window.addEventListener("hashchange", onNavigate);
    window.addEventListener("popstate", onNavigate);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent >= 25 && scrollPercent < 50) trackScrollDepth("25%");
      else if (scrollPercent >= 50 && scrollPercent < 75) trackScrollDepth("50%");
      else if (scrollPercent >= 75 && scrollPercent < 100) trackScrollDepth("75%");
      else if (scrollPercent >= 100) trackScrollDepth("100%");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", onNavigate);
      window.removeEventListener("popstate", onNavigate);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
