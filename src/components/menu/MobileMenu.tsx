import {
  Box,
  Button,
  Fade,
  Flex,
  Link,
  Slide,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MenuType } from './Menu';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useBodyLockScroll } from '@/hooks/useBodyLockScroll';
import NextLink from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export const MobileMenu = ({ menu }: { menu: MenuType }) => {
  const [isOpen, setIsOpen] = useState(false);

  useBodyLockScroll(isOpen);

  return (
    <Box>
      <Box p="3" alignItems="center" onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </Box>

      {isOpen && (
        <Box
          position="absolute"
          bg="blackAlpha.800"
          width="100vw"
          height="100vh"
          top="0"
          left="0"
          backdropBlur="md"
          zIndex="100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Stack height="100vh" width="70vw" bg="white" overflowY="auto" p={4}>
            <Box onClick={() => setIsOpen(!isOpen)} p="2" alignSelf="flex-end">
              <RxCross1 />
            </Box>
            <VStack alignItems="center" h="100%">
              {menu.map(({ title, link }) => {
                return (
                  <Link as={NextLink} key={title} href={link} py="2">
                    {title}
                  </Link>
                );
              })}
              <Spacer />
              <Button onClick={() => signOut()} variant="ghost" color="brown">
                Logout
              </Button>
            </VStack>
          </Stack>
        </Box>
      )}
    </Box>
  );
};
