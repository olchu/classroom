import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      // Session is still loading, do nothing
      return;
    }

    if (!session) {
      // User is not authenticated, redirect to the login page
      router.push('/api/auth/signin');
    }

    if (session) {
      console.log('session', session);
    }
  }, [session, status, router]);
  return { session };
};

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { session} = useAuth();

  return session && <>{children}</>;
};
