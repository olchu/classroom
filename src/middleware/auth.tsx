import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useLayoutEffect } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const useAuthMiddleware = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useLayoutEffect(() => {
    if (status === 'loading') {
      // Session is still loading, do nothing
      return;
    }

    if (!session) {
      // User is not authenticated, redirect to the login page
      router.push('/api/auth/signin');
    }
  }, [session, status, router]);
  return { session };
};

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { session } = useAuthMiddleware();

  return session && <>{children}</>;
};
