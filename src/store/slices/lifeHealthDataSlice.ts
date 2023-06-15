import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface lifeHealthDataState {
    selectedEvent: string;
    userType: string;
}

const initialState: lifeHealthDataState = {
    selectedEvent: '',
    userType: '',
};

export const lifeHealthDataSlice = createSlice({
    name: "travelData",
    initialState,
    reducers: {
        setSelectedEvent: (state, action: PayloadAction<string>) => {
            state.selectedEvent = action.payload;
        },
        setUserType: (state, action: PayloadAction<string>) => {
            state.userType = action.payload;
        },    },
});

export const {
    setSelectedEvent,
    setUserType,
} = lifeHealthDataSlice.actions;

export default lifeHealthDataSlice.reducer;