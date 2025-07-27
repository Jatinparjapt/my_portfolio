// Replace with your GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-FKE6Z8VBKB';

// Log pageviews
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
