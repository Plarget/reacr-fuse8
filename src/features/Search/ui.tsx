import type { FC } from "react"
import type { TSearch } from "./types.ts"
import Input from "@/shared/ui/Input"
import classNames from "classnames"
import "./Search.pcss"
import { Link } from "react-router-dom"
import SvgIcon from "@/shared/ui/SvgIcon"

const Search: FC<TSearch> = (props) => {
  const {
    className,
    totalResult,
    setValue,
    value
  } = props

  const hasTotalResult = Number(totalResult) >= 0

  return (
    <div className={classNames(className, "search")}>
      <Link className="search__link" to="history" relative="path" aria-label="to history jokes">
        <span className="search__link-icon-wrapper" title="to history jokes">
          <SvgIcon className="search__link-icon" name="history"/>
        </span>
      </Link>
      <Input
        className="search__input"
        name="search"
        type="search"
        placeholder="Search jokes..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoFocus
      />
      {hasTotalResult && (
        <div className="search__text text text--montserrat text--small">
          Found jokes: {totalResult}
        </div>
      )}
    </div>
  )
}

export default Search