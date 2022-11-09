import { createSlice } from '@reduxjs/toolkit';
import {  fetchContactsData,  deleteContactData, addContactData,} from './phonebookThunk';


const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  err: 'ERROR',
}

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    status: Status.init,
}
const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState,

  extraReducers: {
    [fetchContactsData.pending](state) {
      state.status = Status.loading;
      state.isLoading = true;
    },
    [fetchContactsData.fulfilled](state, action) {
      state.status = Status.success;
      state.isLoading = false;
      state.items = [...action.payload];
    },
    [fetchContactsData.rejected](state) {
      state.status = Status.err;
    },

    [addContactData.pending](state) {
      state.status = Status.loading;
      state.isLoading = true;
    },
    [addContactData.fulfilled](state, action) {
      state.status = Status.success;
      state.isLoading = false;
      state.items = [...state.items, action.payload];
    },
    [addContactData.rejected](state) {
      state.status = Status.err;
    },

    [deleteContactData.pending](state) {
      state.status = Status.loading;
      state.isLoading = true;
    },
    [deleteContactData.fulfilled](state, action) {
      state.status = Status.success;
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );;
    },
    [deleteContactData.rejected](state) {
      state.status = Status.err;
    },
  },
  
});

export default contactsSlice.reducer;