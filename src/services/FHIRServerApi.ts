import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getEnvironment } from "../utils/ts/helpers";

export const FHIRServerApi = createApi({
    reducerPath: "FHIRServerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://myhealthease.azurewebsites.net',
        prepareHeaders: (headers) => {
            headers.set("Content-type", "application/json");
            headers.set("Content-Security-Policy", "upgrade-insecure-requests");        
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllPatient: builder.query<any, any>({
            query: () => `/Patient`,
        }),

        createPatient: builder.mutation<any, any>({
            query: ({ ...patch }): any => ({
                url: `/Patient`,
                method: "POST",
                body: patch, 
            }),
        }),
    }),
});

export const {
    useGetAllPatientQuery,
    useCreatePatientMutation,
} = FHIRServerApi;