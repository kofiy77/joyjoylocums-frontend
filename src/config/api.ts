// API Configuration for different environments
export const API_CONFIG = {
  // Production API endpoint (your backend server)
  PRODUCTION_API_URL: 'https://your-backend-server.com/api',
  
  // Development API endpoint (local development)
  DEVELOPMENT_API_URL: 'http://localhost:5000/api',
  
  // Get the appropriate API URL based on environment
  getApiUrl: () => {
    if (import.meta.env.PROD) {
      // In production, use environment variable or fallback to production URL
      return import.meta.env.VITE_API_URL || API_CONFIG.PRODUCTION_API_URL;
    }
    return API_CONFIG.DEVELOPMENT_API_URL;
  }
};

// Base API URL for the application
export const BASE_API_URL = API_CONFIG.getApiUrl();

// API endpoints
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  VALIDATE_SESSION: '/validate-session',
  
  // User Management
  USERS: '/users',
  PROFILE: '/profile',
  
  // Staff Management
  STAFF: '/staff',
  STAFF_PROFILE: (id: string) => `/staff/${id}`,
  STAFF_SHIFTS: (id: string) => `/staff/${id}/shifts`,
  STAFF_DOCUMENTS: (id: string) => `/staff/${id}/documents`,
  
  // Care Homes / GP Practices
  CARE_HOMES: '/care-homes',
  CARE_HOME_PROFILE: (id: string) => `/care-homes/${id}`,
  
  // Shifts
  SHIFTS: '/shifts',
  AVAILABLE_SHIFTS: '/available-shifts',
  MY_SHIFTS: '/my-shifts',
  BOOK_SHIFT: '/book-shift',
  CANCEL_BOOKING: '/cancel-booking',
  
  // Documents
  DOCUMENTS: '/documents',
  UPLOAD_DOCUMENT: '/upload-document',
  
  // Notifications
  NOTIFICATIONS: '/notifications',
  
  // Job Posts
  GP_JOB_POSTS: '/gp-job-posts',
  ANP_JOB_POSTS: '/anp-job-posts',
  PCN_JOB_POSTS: '/pcn-job-posts',
  CLINICAL_PHARMACIST_JOB_POSTS: '/clinical-pharmacist-job-posts',
  ALLIED_HEALTHCARE_JOB_POSTS: '/allied-healthcare-job-posts',
  
  // Admin
  ADMIN_STATS: '/admin/stats',
  
  // Testing
  TEST_EMAIL: '/test-email',
};