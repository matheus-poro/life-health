import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Função para realizar a chamada de API com refreshToken
const apiCall = async <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    const response = await axios(config);
    return response;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      // O token expirou, faça o refresh do token aqui
      const refreshedToken = await refreshToken();

      if (refreshedToken) {
        // Verifique se config.headers existe e é um objeto
        if (config.headers && typeof config.headers === 'object') {
          // Atualize o cabeçalho Authorization com o novo token
          config.headers.Authorization = `Bearer ${refreshedToken}`;
        } else {
          // Caso contrário, crie um novo objeto de headers com o cabeçalho Authorization
          config.headers = {
            Authorization: `Bearer ${refreshedToken}`,
          };
        }

        // Realize a chamada de API novamente com o novo token
        const response = await axios(config);
        return response;
      }
    }
    throw error;
  }
};

// Função para fazer o refresh do token
const refreshToken = async (): Promise<string | null> => {
    const url = 'https://login.microsoftonline.com/b8afe944-9d87-4b56-8a8d-0ee761167cbf/oauth2/token';
  const body = new URLSearchParams({
    grant_type: 'Client_Credentials',
    client_id: 'ad623adc-8fed-4706-b4ce-0fb382ba896e',
    client_secret: '41C8Q~WVRYbpxpzxOvH9nKPXwfPlSyZeQT6dvaj~',
    resource: 'api://myhealthease'
  }).toString();

  const headers = {
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept': '*/*',
    'Connection': 'keep-alive',
  };
  
  try {
    // Faça a chamada para o endpoint de refresh token
    const response = await axios.post(url, body, { headers });

    // Extraia o novo token do corpo da resposta
    const refreshedToken = response.data.token;

    // Armazene o novo token no local storage ou cookie, conforme necessário

    return refreshedToken;
  } catch (error) {
    // Lide com o erro de atualização do token
    console.error('Erro ao atualizar o token:', error);
    return null;
  }
};

export const postUser = async (userData: any): Promise<void> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `https://myhealthease.azurewebsites.net/Patient`,
    headers: {
      Authorization: `Bearer ${refreshToken()}`, // Substitua "accessToken" pelo seu token atual
    },
    data: userData,
  };

  const response = await apiCall(config);
  console.log('Resposta da chamada POST:', response.data);
};

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getEnvironment } from "../utils/ts/helpers";

// export const FHIRServerApi = createApi({
//     reducerPath: "FHIRServerApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://myhealthease.azurewebsites.net',
//         prepareHeaders: (headers) => {
//             headers.set("Content-type", "application/json");
//             headers.set("Content-Security-Policy", "upgrade-insecure-requests");        
//             return headers;
//         },
//     }),
//     endpoints: (builder) => ({
//         getAllPatient: builder.query<any, any>({
//             query: () => `/Patient`,
//         }),

//         createPatient: builder.mutation<any, any>({
//             query: ({ ...patch }): any => ({
//                 url: `/Patient`,
//                 method: "POST",
//                 body: patch, 
//             }),
//         }),
//     }),
// });

// export const {
//     useGetAllPatientQuery,
//     useCreatePatientMutation,
// } = FHIRServerApi;