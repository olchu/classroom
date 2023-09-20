import { Button, HStack, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { useGetSession } from '@/hooks/useGetSession';

const menuList = [
  { title: 'Главная', link: '/', onlyAdmins: false },
  { title: 'Добавить сбор', link: '/addCollect', onlyAdmins: true },
  { title: 'Добавить входящее', link: '/addIncoming', onlyAdmins: true },
  { title: 'Ученики', link: '/students', onlyAdmins: true },
];

export const Menu = () => {
  const { isAdmin } = useGetSession();
  return (
    <HStack bg="gray.300" px={4} py={2} spacing={8} alignItems="center">
      {menuList.map(({ title, link, onlyAdmins }) => {
        return (
          ((onlyAdmins && isAdmin) || !onlyAdmins) && (
            <Link as={NextLink} key={title} href={link}>
              {title}
            </Link>
          )
        );
      })}
      <Spacer />
      <Button onClick={() => signOut()} variant="ghost" color="brown">
        Logout
      </Button>
    </HStack>
  );
};
