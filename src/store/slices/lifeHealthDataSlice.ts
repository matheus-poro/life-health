import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface lifeHealthDataState {
    selectedEvent: string;
}

const initialState: lifeHealthDataState = {
    selectedEvent: '',
};

export const lifeHealthDataSlice = createSlice({
    name: "travelData",
    initialState,
    reducers: {
        setSelectedEvent: (state, action: PayloadAction<string>) => {
            state.selectedEvent = action.payload;
        },
    },
});

export const {
    setSelectedEvent,
} = lifeHealthDataSlice.actions;

export default lifeHealthDataSlice.reducer;