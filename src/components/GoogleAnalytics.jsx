import { useEffect } from "react";
import { GA_MEASUREMENT_ID, pageview } from "../config/analytics";

const GoogleAnalytics = () => {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);

    pageview(window.location.pathname + window.location.hash);

    const onNavigate = () => {
      pageview(window.location.pathname + window.location.hash);
    };

    window.addEventListener("hashchange", onNavigate);
    window.addEventListener("popstate", onNavigate);

    return () => {
      window.removeEventListener("hashchange", onNavigate);
      window.removeEventListener("popstate", onNavigate);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
