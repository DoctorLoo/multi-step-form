import {createSlice} from "@reduxjs/toolkit";

const largerStorageReducer = createSlice({
    name:"largerStorageReducer",
    initialState: false,
    reducers: {
        toggleLargerStorage: (state, action)=>{
            return !state;
        }
    }
});

export const {toggleLargerStorage} = largerStorageReducer.actions;
export default largerStorageReducer.reducer;