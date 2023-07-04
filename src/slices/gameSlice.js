import { apiSlice } from "./apiSlice";
import {getAuthToken} from "../utils/authToken"
const USERS_URL = process.env.REACT_APP_USERS_URL;
export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    gameFetch: builder.query({
        query: () => ({
          url: `${USERS_URL}/game/gameGet`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${getAuthToken()}` 
          },
        }),
    }),
    gameModeFetch:builder.query({
        query:(id)=>({
            url: `${USERS_URL}/game/gameMode/${id}`,
            method:"GET" ,
            headers: {
              Authorization: `Bearer ${getAuthToken()}` 
            }, 
        })
    })   
  })
})

export const {
  useGameFetchQuery,
  useGameModeFetchQuery
} = gameApiSlice;
