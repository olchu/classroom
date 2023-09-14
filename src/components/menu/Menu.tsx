import { Box, Button, ChakraProvider, HStack, Stack, textDecoration } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const menuList = [
  { title: 'Главная', link: '/' },
  { title: 'Добавить сбор', link: '/addCollect' },
  { title: 'Добавить входящее', link: '/addIncoming' },
];

export const Menu = () => {
  return (
    <HStack bg="gray.300" p={4} spacing={8}>
      {menuList.map(({ title, link }) => {
        return (
          <Link as={NextLink} key={title} href={link} >
            {title}
          </Link>
        );
      })}
    </HStack>
  );
};
