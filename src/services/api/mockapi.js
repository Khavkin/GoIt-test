import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const mockApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://643124d9d4518cfb0e5b516d.mockapi.io/' }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsersByPage: builder.query({
      query: pageNum => `users?limit=3&page=${pageNum}`,
      providesTags: ['Users'],
    }),
    updateUserById: builder.mutation({
      query: ({ id, followers }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: { followers: followers },
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersByPageQuery, useUpdateUserByIdMutation } = mockApi;
