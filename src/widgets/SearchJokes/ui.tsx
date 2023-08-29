import type { FC } from "react"
import Search from "@/features/Search"
import { useState } from "react"
import JokesList from "@/shared/ui/JokesList"
import useDebounce from "@/shared/hooks/useDebounce"
import { useQuery } from "@tanstack/react-query"
import searchServices from "@/shared/services/searchServices"
import Loading from "@/shared/ui/Loading"
import "./SearchJokes.pcss"

const SearchJokes: FC = () => {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce<string>(value)

  const {data: result, isFetching: isLoading} = useQuery(
    ["search", debouncedValue],
    () => searchServices.getJokes(debouncedValue.trim()),
    {
      enabled: debouncedValue.trim().length > 3,
      keepPreviousData: true,
    }
  )

  return (
    <section className="search-jokes">
      <div className="search-jokes__body container">
        <Search
          className="search-jokes__search"
          totalResult={result?.total}
          value={value}
          setValue={setValue}
        />
        <JokesList jokes={result?.result}/>
        {isLoading && <Loading className="search-jokes__loading"/>}
      </div>
    </section>
  )
}

export default SearchJokes