import type { TSearchServices } from "./types.ts"
import axios from "axios"

const BASE_URL = "https://api.chucknorris.io"

const searchServices: TSearchServices = {
  getJokes: async (query) => {
    return axios.get(`${BASE_URL}/jokes/search`, {
      params: {query}
    }).then(({ data }) => data)
  }
}

export default searchServices