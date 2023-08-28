import MainLayout from '@/components/layouts/main';
import { NextPage } from 'next';
import { ReactElement } from 'react';

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };
export type PageWithLayoutType = PageWithMainLayoutType;
export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;
export default PageWithLayoutType;
