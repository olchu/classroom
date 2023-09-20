import { LayoutProps } from '@/types/pageWithLayouts';
import { Menu } from '../menu/Menu';
import { Box, ChakraProvider } from '@chakra-ui/react';

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <ChakraProvider>
      <Box overflow="hidden" overflowY="auto" minWidth="390px" height="100vh">
        <Menu />
        <Box px={2}>{children}</Box>
      </Box>
    </ChakraProvider>
  );
};
export default MainLayout;
