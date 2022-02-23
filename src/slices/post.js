import { createSlice } from "@reduxjs/toolkit";
import { getApiActionCreator } from "./utils/actionCreator";

export const initialState = {
	loading: false,
	errors: false,
	data: {}
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		getPost: (state) => {
			state.loading = true;
		},
		getPostSuccess: (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.errors = false;
		},
		getPostError: (state) => {
			state.loading = false;
			state.errors = true;
		}
	}
});

const postActionCreator = getApiActionCreator("post");

export const postActions = {
	...postActionCreator("getPost")
};
export default postSlice.reducer;
