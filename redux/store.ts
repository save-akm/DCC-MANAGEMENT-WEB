import { configureStore } from '@reduxjs/toolkit'
import { SideBarSlice } from './SideBarSlice'
import AdjustTimeSlice from './AdjustTimeSlice'


export const makeStore = () => {
    return configureStore({
      reducer: {
        'sidebarSlice':SideBarSlice.reducer,
        'adjustTimeSlice':AdjustTimeSlice
      },
    })
  }

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']