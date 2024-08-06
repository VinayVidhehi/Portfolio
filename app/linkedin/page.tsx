'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LinkedIn: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('https://www.linkedin.com/in/vinay-vidhehi');
    }, 5000); // Redirect after 5 seconds
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Welcome, LinkedIn Visitor!</h1>
      <p className="mb-2">Thank you for visiting my portfolio. You will be redirected to my LinkedIn profile shortly.</p>
      <p>
        If you are not redirected, <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">click here</a>.
      </p>
    </div>
  );
};

export default LinkedIn;
