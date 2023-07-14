import Axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// URLs

const BASE_URL = 'http://127.0.0.1:3000/doctors';

const initialState = {
  doctors: [],
  isLoading: false,
  error: null,
};

// fetching doctors

export const fechDoctors = createAsyncThunk(
  'doctors/fechgDoctors',
  async () => {
    const response = await Axios.get(BASE_URL);
    return response.data;
  },
);

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fechDoctors.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(fechDoctors.fulfilled, (state, action) => {
      state.status = 'succeded';
      state.doctorsstore = state.doctorsstore.concat(action.payload);
    });
    builder.addCase(fechDoctors.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default doctorsSlice.reducer;
