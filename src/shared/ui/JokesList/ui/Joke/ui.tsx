import type { FC } from "react"
import type { TJokeComponent } from "./types.ts"
import getDateFormatted from "@/shared/utils/getDateFormatted"
import { Link } from "react-router-dom"
import "./Joke.pcss"
import useAppDispatch from "@/shared/hooks/useAppDispatch"
import { addNewItem } from "@/shared/store/reducers/HistorySlice"

const Joke: FC<TJokeComponent> = (props) => {
  const {item} = props
  const {value, id, created_at, url} = item
  const dispatch = useAppDispatch()

  const correctDate = getDateFormatted(created_at)

  return (
    <Link className="joke" to={url} target="_blank" onClick={() => dispatch(addNewItem(item))}>
      <div className="joke__text text">
        <p>{value}</p>
      </div>
      <div className="joke__info text text--montserrat text--vary-small text--gray">
        <div className="joke__info-id">{id}</div>
        <div className="joke__info-date">{correctDate}</div>
      </div>
    </Link>
  )
}

export default Joke