import { createSlice } from '@reduxjs/toolkit';
import { tasksApi } from './tasksApi';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(tasksApi.endpoints.getTasks.matchFulfilled, (state, action) => {
        return action.payload;
      })
      .addMatcher(tasksApi.endpoints.createTask.matchFulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default tasksSlice.reducer;
