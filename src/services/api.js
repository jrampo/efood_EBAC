import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getRestaurantById: builder.query({
      query: (id) => `restaurantes/${id}`,
    }),
    getRestaurants: builder.query({
      query: (id) => "restaurantes",
    }),
  }),
});

export const { useGetRestaurantByIdQuery, useGetRestaurantsQuery } = api;
export default api;
