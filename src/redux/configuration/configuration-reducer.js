import { createReducer } from '@reduxjs/toolkit';
import { addConfigurationSuccess } from './configuration-action';

const initialState = {
  base_url: null,
  logo_sizes: [],
  backdrop_sizes: '',
};

const configuration = createReducer(initialState, {
  [addConfigurationSuccess]: (
    _,
    { payload: { logo_sizes, base_url, backdrop_sizes } },
  ) => ({
    base_url,
    backdrop_sizes: backdrop_sizes[3],
    logo_sizes: [logo_sizes[4], logo_sizes[5]],
  }),
});

export default configuration;
