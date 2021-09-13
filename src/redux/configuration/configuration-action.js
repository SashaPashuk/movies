import { createAction } from '@reduxjs/toolkit';

//Home Page (Trending Movies)
export const addConfigurationRequest = createAction(
  'configuration/addConfigurationRequest',
);
export const addConfigurationSuccess = createAction(
  'configuration/addConfigurationSuccess',
);
export const addConfigurationError = createAction(
  'configuration/addConfigurationError',
);

//Movies Details Page
