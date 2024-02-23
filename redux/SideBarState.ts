import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit"

// type State = boolean;
// const toggleSidebar: CaseReducer<State, PayloadAction<boolean>> = (state, action) =>
//   state = action.payload

export const SideBarState = createSlice({
    name:'sidebarState',
    initialState:false,
    reducers:{
        ToggleSidebar (state,action) {
            state = action.payload
        }
    }
})

export const { ToggleSidebar } = SideBarState.actions