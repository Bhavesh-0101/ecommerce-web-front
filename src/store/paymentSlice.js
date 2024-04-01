// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payments: []
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    fetchPaymentSuccess(state, action) {
      state.loading = false;
      state.payment = action.payload;
    }
    // Add more reducers as needed
  }
});

export const { fetchPaymentSuccess } = paymentSlice.actions;

export default paymentSlice.reducer;
