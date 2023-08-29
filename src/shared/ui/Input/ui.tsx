import type { FC } from "react"
import type { TInput } from "./types.ts"
import classNames from "classnames"
import "./Input.pcss"

const Input: FC<TInput> = (props) => {
  const {
    className,
    ...rest
  } = props

  return (
    <input
      className={classNames(className, "input")}
      {...rest}
    />

  )
}

export default Input