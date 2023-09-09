import {createSlice} from "@reduxjs/toolkit";

const onlineServiceReducer = createSlice({
    name:"onlineServiceReducer",
    initialState: false,
    reducers: {
        toggleOnlineService: (state, action)=>{
            return !state;
        }
    }
});

export const {toggleOnlineService} = onlineServiceReducer.actions;
export default onlineServiceReducer.reducer;