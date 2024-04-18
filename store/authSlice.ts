import { AuthState } from "@/types/auth.types";
import { log } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  authUser: {
    email: null,
    firstName: null,
    lastName: null,
  },
  appState: {
    loggedIn: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload, type }) => {
      state.authUser = { ...state.authUser, ...payload };
      state.appState = { ...state.appState, loggedIn: true };
      log(state, payload, type);
    },
    signup: (state, { payload, type }) => {
      state.authUser = { ...state.authUser, ...payload };
      log(state, payload, type);
    },
    logout: (state, { payload, type }) => {
      state.authUser = { ...state.authUser, ...initialState.authUser };
      state.appState = { ...state.appState, ...initialState.appState };
      log(state, payload, type);
    },
  },
});

export const { login, signup, logout } = authSlice.actions;

export default authSlice.reducer;
