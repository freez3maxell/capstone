import { fetchAPI, submitAPI } from '../utilities/api.js';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES' && action.date) {
    const dateObj = typeof action.date === 'string' ? new Date(action.date) : action.date;
    return fetchAPI(dateObj);
  }
  return state;
};

export const submitFormLogic = async (formData, navigate) => {
  const success = await submitAPI(formData);
  if (success) {
    navigate('/booking-confirmed');
  }
};

