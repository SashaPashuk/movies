import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: false,
  reducers: {
    error: (_, { payload }) => payload,
  },
});

export const { error } = errorSlice.actions;
export default errorSlice;
