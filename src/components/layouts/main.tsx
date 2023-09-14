import { LayoutProps } from '@/types/pageWithLayouts';
import { Menu } from '../menu/Menu';
import { Box, ChakraProvider } from '@chakra-ui/react';

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <ChakraProvider>
      <Menu />
      <Box px={2}>{children}</Box>
    </ChakraProvider>
  );
};
export default MainLayout;
