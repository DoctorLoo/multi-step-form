import {createSlice} from "@reduxjs/toolkit";

const phoneReducer = createSlice({
    name: "phoneReducer",
    initialState: "",
    reducers: {
        setPhone : (state, action) => {
            return action.payload;
        }
    }
});

export const {setPhone} = phoneReducer.actions;
export default phoneReducer.reducer;