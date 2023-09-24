import { Box, Button, Link, Spacer, Stack, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useBodyLockScroll } from '@/hooks/useBodyLockScroll';
import NextLink from 'next/link';
import { signOut } from 'next-auth/react';
import { MenuType } from './menuList';
import { AnimatePresence, motion } from 'framer-motion';

export const MobileMenu = ({ menu }: { menu: MenuType }) => {
  const [isOpen, setIsOpen] = useState(false);

  useBodyLockScroll(isOpen);

  return (
    <Box>
      <Box p="3" alignItems="center" onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </Box>

      <AnimatePresence>
        {isOpen && (
          <>
            <Box
              position="absolute"
              top="0"
              left="0"
              bg="blackAlpha.800"
              width="100vw"
              height="100vh"
              backdropBlur="md"
              zIndex="100"
              onClick={() => setIsOpen(!isOpen)}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: '1' }}
            ></Box>
            <Stack
              as={motion.div}
              initial={{ x: '-70vw' }}
              animate={{ x: 0 }}
              exit={{ x: '-70vw' }}
              transition={{ duration: '1' }}
              height="100vh"
              width="60vw"
              bg="white"
              overflowY="auto"
              p={4}
              position="absolute"
              top="0"
              left="0"
              zIndex={110}
            >
              <Box
                onClick={() => setIsOpen(!isOpen)}
                p="2"
                alignSelf="flex-end"
              >
                <RxCross1 />
              </Box>
              <VStack alignItems="center" h="100%">
                {menu.map(({ title, link }) => {
                  return (
                    <Link as={NextLink} key={title} href={link} py="2"  onClick={() => setIsOpen(!isOpen)}>
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
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};
