
import React from 'react';

export const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22.45c-2.45 0-4.7-.64-6.6-1.78-.9-.54-1.21-1.7-.67-2.6.54-.9 1.7-1.21 2.6-.67C8.6 18 10.23 18.42 12 18.42s3.4-.43 4.67-1.02c.9-.54 2.06-.23 2.6.67.54.9.23 2.06-.67 2.6C16.7 21.81 14.45 22.45 12 22.45zM12 1.55c2.45 0 4.7.64 6.6 1.78.9.54 1.21 1.7.67 2.6-.54.9-1.7 1.21-2.6.67C15.4 6 13.77 5.58 12 5.58s-3.4.43-4.67 1.02c-.9.54-2.06.23-2.6-.67-.54-.9-.23-2.06.67-2.6C7.3 2.19 9.55 1.55 12 1.55z" fill="#3776AB"/>
    <path d="M12 12c-3.31 0-6-2.69-6-6h3.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5H18c0 3.31-2.69 6-6 6zM12 12c3.31 0 6 2.69 6 6h-3.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5H6c0-3.31 2.69-6 6-6z" fill="#FFD43B"/>
  </svg>
);

export const FastAPIIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 12l6-4M12 12v8M12 12L6 8m6 4l-6 4m6-4l6 4"/>
    </svg>
);

export const PostgresIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#336791"/>
        <path d="M12 20.5V14.5M12 14.5H9.5C8.11929 14.5 7 13.3807 7 12C7 10.6193 8.11929 9.5 9.5 9.5H12M12 14.5H14.5C15.8807 14.5 17 13.3807 17 12C17 10.6193 15.8807 9.5 14.5 9.5H12M12 9.5V3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const DockerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.31 9.69a.75.75 0 00-.75-.75h-3.41v-1.6c0-.41-.34-.75-.75-.75h-1.6a.75.75 0 00-.75.75v1.6H9.41V7.1a.75.75 0 00-.75-.75h-1.6a.75.75 0 00-.75.75v1.84H2.44a.75.75 0 00-.75.75v3.47c0 .41.34.75.75.75h3.66v1.4h-.01a.75.75 0 00-.75.75v1.6c0 .41.34.75.75.75h1.6a.75.75 0 00.75-.75v-1.6h4.64v1.6a.75.75 0 00.75.75h1.6a.75.75 0 00.75-.75v-1.6h3.4a.75.75 0 00.75-.75V9.69zM7.09 10.69h-1.6v-1.6h1.6v1.6zm4.62 0h-1.6v-1.6h1.6v1.6zm4.62 0h-1.6v-1.6h1.6v1.6z" fill="#2496ED"/>
        <path d="M20.2 4.02a.75.75 0 00-1.06 0L4.02 19.14a.75.75 0 001.06 1.06L20.2 5.08a.75.75 0 000-1.06z" fill="#2496ED" opacity="0.3"/>
    </svg>
);