import type { FC } from "react"
import { Outlet } from "react-router"
import Content from "./ui/Content"

const Layout: FC = () => {
  return (
    <Content>
      <Outlet/>
    </Content>
  )
}

export default Layout