import { FC, PropsWithChildren } from "react"
import "./Content.pcss"

const Content: FC<PropsWithChildren> = (props) => {
  const {children} = props

  return (
    <main className="main">
      {children}
    </main>
  )
}

export default Content