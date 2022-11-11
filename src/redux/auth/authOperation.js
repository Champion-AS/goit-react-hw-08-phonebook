import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registrationForm = createAsyncThunk(
  'auth/registration',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', data);
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginForm = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', data);
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logoutForm = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout', data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/current',
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      token.set(state.auth.token);
      const response = await axios.get('/users/current', data);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
