import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/tasks' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/',
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: '/',
        method: 'POST',
        body: task,
      }),
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = tasksApi;
