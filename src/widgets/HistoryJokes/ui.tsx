import type { FC } from "react"
import useAppSelector from "@/shared/hooks/useAppSelector"
import "./HistoryJokes.pcss"
import JokesList from "@/shared/ui/JokesList"
import SvgIcon from "@/shared/ui/SvgIcon"
import { Link } from "react-router-dom"

const HistoryJokes: FC = () => {
  const history = useAppSelector(state => state.HistorySlice)

  const hasHistory = history.length > 0
  return (
    <div className="history-jokes">
      <Link className="history-jokes__link" to="../" relative="path" aria-label="back to home page">
        <span className="history-jokes__link-icon-wrapper" title="back to home page">
          <SvgIcon className="history-jokes__link-icon" name="arrow-back"/>
        </span>
      </Link>
      <div className="history-jokes__inner container">
        <div className="history-jokes__header">
          <h2 className="history-jokes__title title">History</h2>
          <span
            className="history-jokes__subtext text text--gray text--vary-small text--montserrat">Here is your last visited jokes</span>
        </div>
        {hasHistory ? (
          <JokesList jokes={history}/>) : (
          <h3 className="history-jokes__label label">Шуток нет:(</h3>
        )}
      </div>
    </div>
  )
}

export default HistoryJokes