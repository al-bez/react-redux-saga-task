import { createSlice } from "@reduxjs/toolkit";
import { getApiActionCreator } from "./utils/actionCreator";

// NOTE: Removed loading from this reducer to demonstrate a
// different approach with less code, but possibly more
// error prone

export const initialState = {
  errors: false,
  list: undefined // []
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state) => {
      state.errors = false;
      state.list = undefined;
    },
    getCommentsSuccess: (state, { payload }) => {
      state.list = payload;
    },
    getCommentsError: (state) => {
      state.errors = true;
    }
  }
});

const commentsActionCreator = getApiActionCreator("comments");
export const commentsActions = {
  ...commentsActionCreator("getComments")
};
export default commentsSlice.reducer;
