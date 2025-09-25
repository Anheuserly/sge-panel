// app/page.tsx
"use client";

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/login'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-pulse">
        <Image 
          src="/amcmep-logo.png"
          alt="AMCMEP Logo" 
          width={250} 
          height={250}
          priority
        />
      </div>
    </div>
  );
}