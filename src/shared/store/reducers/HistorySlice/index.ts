import type { THistorySlice } from "./types"
import type { TJoke } from "@/shared/types/comon.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: THistorySlice = []

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addNewItem(state, action: PayloadAction<TJoke>) {
      const item = action.payload

      const filteredState = state.filter((element) => {
        return element.id !== item.id
      })

      return [action.payload, ...filteredState]
    }
  },
})

export const {addNewItem} = historySlice.actions
export default historySlice.reducer