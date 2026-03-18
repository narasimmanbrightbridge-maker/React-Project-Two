/// <reference types="vite/client" />

// Fixes the Swiper CSS errors
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/scrollbar';

// Fixes the "Could not find declaration file" for your .jsx pages
declare module './pages/*';
declare module '../components/*';