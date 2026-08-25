// Google Analytics Configuration
export const GA_CONFIG = {
  // Replace with your actual Google Analytics Measurement ID
  measurementId: 'G-NHZTZXRXY9', // Replace this with your actual GA4 Measurement ID
  
  // Your website URL
  websiteUrl: 'https://aviral-asthana.dev', // Your custom domain
  
  // Custom dimensions (optional)
  customDimensions: {
    userType: 'user_type',
    pageType: 'page_type',
    blogCategory: 'blog_category'
  }
};

// Google Analytics Events
export const GA_EVENTS = {
  // Page views
  PAGE_VIEW: 'page_view',
  
  // Blog interactions
  BLOG_POST_VIEW: 'blog_post_view',
  BLOG_POST_CLICK: 'blog_post_click',
  EXTERNAL_BLOG_CLICK: 'external_blog_click',
  
  // Portfolio interactions
  PROJECT_VIEW: 'project_view',
  RESUME_DOWNLOAD: 'resume_download',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  
  // Social interactions
  SOCIAL_LINK_CLICK: 'social_link_click',
  
  // Navigation
  NAVIGATION_CLICK: 'navigation_click',
  
  // Scroll tracking
  SCROLL_DEPTH: 'scroll_depth'
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    return; // Already initialized
  }

  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_CONFIG.measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });
};

// Track page views
export const trackPageView = (page_title, page_location) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.PAGE_VIEW, {
      page_title: page_title || document.title,
      page_location: page_location || window.location.href,
      page_type: 'portfolio'
    });
  }
};

// Track blog post views
export const trackBlogPostView = (postTitle, postCategory, postTags) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.BLOG_POST_VIEW, {
      blog_post_title: postTitle,
      blog_post_category: postCategory,
      blog_post_tags: postTags?.join(', '),
      custom_dimension3: postCategory // blog_category
    });
  }
};

// Track external blog clicks
export const trackExternalBlogClick = (blogUrl, blogTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.EXTERNAL_BLOG_CLICK, {
      link_url: blogUrl,
      link_text: blogTitle,
      destination: 'hashnode'
    });
  }
};

// Track resume downloads
export const trackResumeDownload = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.RESUME_DOWNLOAD, {
      file_name: 'Aviral_Asthana_Resume.pdf',
      file_type: 'pdf'
    });
  }
};

// Track project views
export const trackProjectView = (projectName, projectCategory) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.PROJECT_VIEW, {
      project_name: projectName,
      project_category: projectCategory
    });
  }
};

// Track social link clicks
export const trackSocialClick = (platform, url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.SOCIAL_LINK_CLICK, {
      social_platform: platform,
      link_url: url
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.SCROLL_DEPTH, {
      scroll_depth: depth
    });
  }
};
