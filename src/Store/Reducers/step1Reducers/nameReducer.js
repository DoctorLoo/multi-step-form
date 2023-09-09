import {createSlice} from "@reduxjs/toolkit";

const nameReducer = createSlice({
    name: "nameReducer",
    initialState: "",
    reducers: {
        setName: (state, action)=>{
            return action.payload;
        }
    }
});

export const {setName} = nameReducer.actions;
export default nameReducer.reducer;