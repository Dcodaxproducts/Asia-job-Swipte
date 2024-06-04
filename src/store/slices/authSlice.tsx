import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  emailForSignUp: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  otpStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  otpError: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  emailForSignUp: null,
  status: 'idle',
  error: null,
  otpStatus: 'idle',
  otpError: null,
  accessToken: null,
  refreshToken: null,
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ajs-server.hostdonor.com/api/v1';

export const signIn = createAsyncThunk<User, { email: string; password: string }, { rejectValue: string }>(
  'auth/signIn',
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

export const registerJobSeeker = createAsyncThunk<User, { email: string; password: string; firstName: string; lastName: string; otp: string }, { rejectValue: string }>(
  'auth/registerJobSeeker',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register/job-seeker`, userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'An error occurred during job seeker registration.');
    }
  }
);

// Register Company Role
export const registerCompanyRole = createAsyncThunk<User, { email: string; password: string; firstName: string; lastName: string; role: string }, { rejectValue: string }>(
  'auth/registerCompanyRole',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register/company-role`, userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'An error occurred during company role registration.');
    }
  }
);

export const googleSignIn = createAsyncThunk<{ user: User; accessToken: string; refreshToken: string }, { code: string, role: string }, { rejectValue: string }>(
  'auth/googleSignIn',
  async ({ code, role }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/google`, { code, role });
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message || 'An error occurred during Google sign-in.');
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const sendOTP = createAsyncThunk<void, { email: string }, { rejectValue: string }>(
  'auth/sendOTP',
  async ({ email }, { rejectWithValue }) => {
    try {
      await axios.post(`${API_URL}/auth/send-otp`, { email });
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message || 'An error occurred while sending OTP.');
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const verifyOTP = createAsyncThunk<void, { email: string; otp: string }, { rejectValue: string }>(
  'auth/verifyOTP',
  async ({ email, otp }, { dispatch, rejectWithValue }) => {
    try {
      await axios.post(`${API_URL}/auth/verify-otp`, { email, otp: Number(otp) });
      dispatch(setEmailForSignUp(email));
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message || 'An error occurred while verifying OTP.');
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
      state.accessToken = null;
      state.refreshToken = null;
    },
    setEmailForSignUp: (state, action: PayloadAction<string>) => {
      state.emailForSignUp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerJobSeeker.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(registerJobSeeker.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.error = null;
    })
    .addCase(registerJobSeeker.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.status = 'failed';
      state.error = action.payload || 'An unknown error occurred';
    })
    .addCase(registerCompanyRole.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(registerCompanyRole.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.error = null;
    })
    .addCase(registerCompanyRole.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.status = 'failed';
      state.error = action.payload || 'An unknown error occurred';
    })
    .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'An unknown error occurred';
      })
      .addCase(sendOTP.pending, (state) => {
        state.otpStatus = 'loading';
      })
      .addCase(sendOTP.fulfilled, (state) => {
        state.otpStatus = 'succeeded';
        state.otpError = null;
      })
      .addCase(sendOTP.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.otpStatus = 'failed';
        state.otpError = action.payload || 'An unknown error occurred';
      })
      .addCase(verifyOTP.pending, (state) => {
        state.otpStatus = 'loading';
      })
      .addCase(verifyOTP.fulfilled, (state, action: PayloadAction<void>) => {
        state.otpStatus = 'succeeded';
        state.otpError = null;
      })
      .addCase(verifyOTP.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.otpStatus = 'failed';
        state.otpError = action.payload || 'An unknown error occurred';
      })
      .addCase(googleSignIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(googleSignIn.fulfilled, (state, action: PayloadAction<{ user: User; accessToken: string; refreshToken: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.error = null;
      })
      .addCase(googleSignIn.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'An unknown error occurred';
      });
  },
});

export const { signOut, setEmailForSignUp } = authSlice.actions;

export default authSlice.reducer;
