import { configureStore } from "@reduxjs/toolkit";
import lifeHealthDataReducer from "./slices/lifeHealthDataSlice"
// import { FHIRServerApi } from "../services/FHIRServerApi";

export const store = configureStore({
    reducer: {
        lifeHealthDataSlice: lifeHealthDataReducer,
        // [FHIRServerApi.reducerPath]: FHIRServerApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false,
    // }).concat(FHIRServerApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
