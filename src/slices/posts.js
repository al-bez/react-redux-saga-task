import { createSlice } from "@reduxjs/toolkit";
import { getApiActionCreator } from "./utils/actionCreator";

export const initialState = {
	loading: false,
	errors: false,
	list: []
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		getPosts: (state) => {
			state.loading = true;
		},
		getPostsSuccess: (state, { payload }) => {
			state.list = payload;
			state.loading = false;
			state.errors = false;
		},
		getPostsError: (state) => {
			state.loading = false;
			state.errors = true;
		},
		createPost: (state, { payload }) => {
			state.list = [payload, ...state.list]
		},
		updatePost: (state, { payload }) => {
			state.list = state.list.map(post => post.id === payload.id
				? payload
				: post
			)
		}
	}
});

const postsActionCreator = getApiActionCreator("posts");
let { createPost, updatePost } = postsSlice.actions
export const postsActions = {
	...postsActionCreator("getPosts"), createPost, updatePost
};
export default postsSlice.reducer;
