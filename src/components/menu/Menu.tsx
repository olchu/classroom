import { Button, HStack, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { useGetSession } from '@/hooks/useGetSession';
import { useMedia } from '@/hooks/useMedia';
import { MobileMenu } from './MobileMenu';

const menuList = [
  { title: 'Главная', link: '/', onlyAdmins: false },
  { title: 'Добавить сбор', link: '/addCollect', onlyAdmins: true },
  { title: 'Добавить входящее', link: '/addIncoming', onlyAdmins: true },
  { title: 'Ученики', link: '/students', onlyAdmins: true },
];

export type MenuType = typeof menuList;

export const Menu = () => {
  const { isAdmin } = useGetSession();
  const isMobile = useMedia('(max-width: 550px)');

  const menu = menuList.filter(
    ({ onlyAdmins }) => (onlyAdmins && isAdmin) || !onlyAdmins
  );

  return (
    <HStack
      bg="gray.300"
      px="2"
      py={2}
      spacing={8}
      alignItems="center"
      h="60px"
      position="relative"
    >
      {isMobile ? (
        <MobileMenu menu={menu} />
      ) : (
        menu.map(({ title, link }) => {
          return (
            <Link as={NextLink} key={title} href={link}>
              {title}
            </Link>
          );
        })
      )}
      <Spacer />
      <Button onClick={() => signOut()} variant="ghost" color="brown">
        Logout
      </Button>
    </HStack>
  );
};
