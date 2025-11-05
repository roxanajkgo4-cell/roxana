import { useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { useLocation } from "react-router-dom";

// Generate or retrieve session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('ci_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('ci_session_id', sessionId);
  }
  return sessionId;
};

// Detect device type
const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Track analytics event
export const trackEvent = async (eventData) => {
  try {
    await base44.entities.Analytics.create({
      ...eventData,
      session_id: getSessionId(),
      device_type: getDeviceType(),
      referrer: document.referrer || 'direct',
      created_date: new Date().toISOString()
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Hook to track page views
export const usePageTracking = (pageName) => {
  const location = useLocation();
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      trackEvent({
        event_type: 'page_view',
        page: pageName || location.pathname,
        metadata: {
          url: window.location.href,
          timestamp: new Date().toISOString()
        }
      });
      tracked.current = true;
    }

    return () => {
      tracked.current = false;
    };
  }, [pageName, location.pathname]);
};

// Hook to track button clicks
export const useButtonTracking = () => {
  return (buttonLabel, additionalData = {}) => {
    trackEvent({
      event_type: 'button_click',
      page: window.location.pathname,
      button_label: buttonLabel,
      metadata: additionalData
    });
  };
};

// Hook to track form submissions
export const useFormTracking = () => {
  return (formName, formData = {}) => {
    trackEvent({
      event_type: 'form_submission',
      page: window.location.pathname,
      metadata: {
        form_name: formName,
        ...formData
      }
    });
  };
};

// Hook to track service views
export const useServiceTracking = () => {
  return (serviceName) => {
    trackEvent({
      event_type: 'service_view',
      page: window.location.pathname,
      service_name: serviceName,
      metadata: {
        timestamp: new Date().toISOString()
      }
    });
  };
};

// Hook to track pack selections
export const usePackTracking = () => {
  return (packName, packPrice = null) => {
    trackEvent({
      event_type: 'pack_selection',
      page: window.location.pathname,
      pack_name: packName,
      metadata: {
        price: packPrice,
        timestamp: new Date().toISOString()
      }
    });
  };
};