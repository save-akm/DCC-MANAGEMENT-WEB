import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AdjustTime } from '@/lib/types/type'
import { toast } from "sonner"
import axios from 'axios'

interface AdjustTimeType {
    dataAdjusttime:AdjustTime[],
    currentAdjustime:null,
    loading:boolean,
    error:null
}

export const initialStateAdjust:AdjustTimeType = {
    dataAdjusttime: [],
    currentAdjustime:null,
    loading:false,
    error:null
  }

  const apiUrl = 'http://192.168.34.34:8006/';
  export const fetchAdjustTime = createAsyncThunk("adjust/fetchAll", async () => {
    const response = await axios.get(`${apiUrl}/api/D3AJTME/GetAll`);
    return response.data;
  });

  export const editAdjustTime = createAsyncThunk("adjust/update", async (user) => {
    // const response = await axios.put(`${apiUrl}/`, user);
    // return response.data;
    return true;
  });

  const AdjustTimeSlice = createSlice({
    name:"adjusttime",
    initialState:initialStateAdjust,
    reducers:{
      addAdjust(state,action){
       
        state.loading = action.payload
      }
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetchAdjustTime.fulfilled, (state, action) => {
        // Add user to the state array
        state.dataAdjusttime = action.payload
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      })
    },
  })

  export const { addAdjust } = AdjustTimeSlice.actions
  export default AdjustTimeSlice.reducer;