import { createSlice } from "@reduxjs/toolkit";
import { getApiActionCreator } from "./utils/actionCreator";

export const initialState = {
  errors: false,
  data: undefined // {}
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    getSettings: (state) => {
      state.errors = false;
      state.data = undefined;
    },
    getSettingsSuccess: (state, { payload }) => {
      state.data = payload;
    },
    getSettingsError: (state) => {
      state.errors = true;
    }
  }
});

const settingsActionCreator = getApiActionCreator("settings");
export const settingsActions = {
  ...settingsActionCreator("getSettings")
};
export default settingsSlice.reducer;
