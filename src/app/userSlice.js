/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp } from '../services/auth';

export const initialState = {
  isAuthenticated: false,
  user: {},
  status: 'idle'
};

export const authUser = createAsyncThunk(
  'currentUser/authUser',
  async (data, thunkAPI) => {
    try {
      const user = await signIn(data);
      return user;
    } catch (error) {
      const { message } = error;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'currentUser/signUpUser',
  async (data, thunkAPI) => {
    try {
      const user = await signUp(data);
      return user;
    } catch (error) {
      const { message } = error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.isAuthenticated = !!Object.keys(action.payload).length;
      state.user = action.payload;      
      if (action.payload.role >= 777 || action.payload.role==='admin') {
        state.user.role = 'admin';
      } else {
        state.user.role = 'regular';
      }
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logOutUser: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
      state.status = 'idle';
      localStorage.removeItem('user');
    }
  },
  extraReducers: builder => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      if (action.payload.role >= 777) {
        state.user.role = 'admin';
      } else {
        state.user.role = 'regular';
      }
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.status = 'succeeded';
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
      state.status = 'failed';
    });
    builder.addCase(authUser.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.status = 'failed';
    });
    builder.addCase(signUpUser.pending, (state, action) => {
      state.status = 'pending';
    });
  }
});

export const { setCurrentUser, logOutUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;