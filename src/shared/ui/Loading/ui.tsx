import type { FC } from "react"
import type { TLoading } from "./types.ts"
import classNames from "classnames"
import "./Loading.pcss"

const Loading: FC<TLoading> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames(className, "loading")}>
      <svg
        className="loading__spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          className="loading__spinner-path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30">
        </circle>
      </svg>
    </div>
  )
}

export default Loading