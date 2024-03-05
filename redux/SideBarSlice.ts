import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'

interface Status {
    open:boolean
}

const initialState: Status = {
    open: true,
  }

export const SideBarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers: {
        sidebarOpen: (state) => {
            state.open = !state.open
        }
    }
})

export const { sidebarOpen } = SideBarSlice.actions
export const selectOpen = (state:RootState) => state.sidebarSlice.open 
export default SideBarSlice.reducer