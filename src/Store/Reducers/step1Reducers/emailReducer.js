import {createSlice} from "@reduxjs/toolkit";

const emailReducer = createSlice({
    name: "emailReducer",
    initialState: "",
    reducers: {
        setEmail : (state, action) => {
            return action.payload;
        }
    }
});

export const {setEmail} = emailReducer.actions;
export default emailReducer.reducer;