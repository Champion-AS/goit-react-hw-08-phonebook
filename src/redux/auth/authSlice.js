import { createSlice } from '@reduxjs/toolkit';
import {
  getUser,
  loginForm,
  logoutForm,
  registrationForm,
} from './authOperation';

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: Status.init,
};

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registrationForm.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [registrationForm.fulfilled](state, action) {
      console.log(action.payload);
      state.status = Status.success;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [registrationForm.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },
    [loginForm.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [loginForm.fulfilled](state, action) {
      state.status = Status.success;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginForm.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },

    [logoutForm.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [logoutForm.fulfilled]() {
      return initialState;
    },
    [logoutForm.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },

    [getUser.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [getUser.fulfilled](state, action) {
      state.status = Status.success;
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
    [getUser.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },
  },
});

export default authSlise.reducer;
