import type { TUseDebounce } from "./types.ts"
import { useEffect, useState } from "react"

const useDebounce: TUseDebounce = (value, delay = 250) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
