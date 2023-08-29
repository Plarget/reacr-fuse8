import type { FC } from "react"
import type { TJokesList } from "./types.ts"
import Joke from "./ui/Joke"
import "./JokesList.pcss"

const JokesList: FC<TJokesList> = (props) => {
  const {
    jokes
  } = props

  return (
    <ul className="jokes-list">
      {jokes?.map((element) => (
        <li className="jokes-list__item" key={element.id}>
          <Joke item={element}/>
        </li>
      ))}
    </ul>
  )
}

export default JokesList