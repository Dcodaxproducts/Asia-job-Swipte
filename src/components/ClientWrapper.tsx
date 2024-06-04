"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ProtectedRoute from './ProtectedRoute';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const publicPaths = ['/signin','/send-otp','/newotp', '/signup', '/home', '/job_description' ,'/findjobs', '/joboffers', '/matchedjobs', '/savedjobs', '/browsecompanies','/myprofile'];
  const accessibleWithoutAuth = publicPaths.includes(pathname);

  useEffect(() => {
    if (!user && !accessibleWithoutAuth) {
      router.push('/signin');
    }
  }, [user, accessibleWithoutAuth, router]);

  return <ProtectedRoute accessibleWithoutAuth={accessibleWithoutAuth}>{children}</ProtectedRoute>;
};

export default ClientWrapper;
