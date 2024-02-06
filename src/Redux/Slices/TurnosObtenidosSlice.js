import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    currentUser: null,
}

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            };
        
        },
    }
})


export const {setUser } = userSlice.actions;
export default userSlice.reducer;