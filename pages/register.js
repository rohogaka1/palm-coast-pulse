import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();

  // Redirect if not in development
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      router.push('/');
    }
  }, [router]);

  // Return null or loading state while redirecting
  return null;
} 