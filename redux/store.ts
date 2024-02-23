import { configureStore } from '@reduxjs/toolkit'
import {SideBarState} from './SideBarState'
export const store = configureStore({
    reducer:{
        'sidebarState':SideBarState.reducer
    }
})