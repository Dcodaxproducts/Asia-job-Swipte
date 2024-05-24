import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state for the auth slice
interface AuthState {
  user: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

// Read the API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signIn = createAsyncThunk<
  any,
  { email: string; password: string },
  { rejectValue: string }
>(
  'signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signIn`, credentials);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message || 'An error occurred during sign-in.');
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const signUp = createAsyncThunk<
  any,
  { email: string; password: string; name: string },
  { rejectValue: string }
>(
  'signUp',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signUp`, userData);
      return response.data;
    } catch (error: any) {
      console.log("signup error" ,error)
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message || 'An error occurred during sign-up.');
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
