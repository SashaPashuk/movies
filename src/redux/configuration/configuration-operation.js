import axios from 'axios';
import {
  addConfigurationRequest,
  addConfigurationSuccess,
  addConfigurationError,
} from './configuration-action';

const fetchConfiguration = () => async dispatch => {
  dispatch(addConfigurationRequest());

  try {
    const {
      data: { images },
    } = await axios.get('/configuration');

    dispatch(addConfigurationSuccess(images));
  } catch (error) {
    dispatch(addConfigurationError());
  }
};

export default fetchConfiguration;
