import { LayoutProps } from "@/types/pageWithLayouts"
import { Menu } from "../menu/Menu"

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <Menu/>
      {children}
    </div>
  )
}
export default MainLayout