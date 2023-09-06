import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, checkUser, signOut, } from "./authAPI";
import { updateUser } from "../user/userAPI";

const initialState = {
  loggedInUser: null,
  status: "idle",
  error : null,
};

export const createUserAsyn = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const checkUserAsyn = createAsyncThunk(
  "user/checkUser",
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const signOutAsyn = createAsyncThunk(
  "user/signOut",
  async (userId) => {
    const response = await signOut(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsyn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsyn.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsyn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsyn.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsyn.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(signOutAsyn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsyn.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = null;
      });
  },
});

export const { increment } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;


export default authSlice.reducer;
