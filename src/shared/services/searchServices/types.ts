import type { TJoke } from "@/shared/types/comon.ts"

export type TGetJokes= {
  result: Array<TJoke>,
  total: number
}

export type TSearchServices = {
  getJokes: (query: string) => Promise<TGetJokes>
}