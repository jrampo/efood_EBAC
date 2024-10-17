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
      query: () => "restaurantes",
    }),
    purchase: builder.mutation({
      query: (pedido) => ({
        url: "checkout",
        method: "POST",
        body: pedido,
      }),
    }),
  }),
});

export const {
  useGetRestaurantByIdQuery,
  useGetRestaurantsQuery,
  usePurchaseMutation,
} = api;
export default api;
