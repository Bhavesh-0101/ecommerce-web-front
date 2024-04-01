import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from './paymentSlice';

const store = configureStore({
  reducer: {
    payment: paymentReducer
    // Add more reducers as needed
  }
});

export default store;