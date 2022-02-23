import { call, put, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { postsActions } from "slices/posts";
import { postActions } from "slices/post";
import { fetchPosts, fetchPost, fetchComments } from "api/postsApi";
import { commentsActions } from "../slices/comments";

// ----- WORKERS -------------------------------------------------------
function* getPosts() {
	try {
		const posts = yield call(fetchPosts);
		yield put(postsActions.getPostsSuccess(posts));
	} catch (err) {
		yield put(postsActions.getPostsError(err));
	}
}

function* getPost({ payload }) {
	try {
		yield put(postActions.getPostSuccess(payload));
	} catch (err) {
		yield put(postActions.getPostError(err));
	}
}

function* createPost({ payload }) {
	try {
		yield put(postsActions.createPost(payload));
	} catch (err) {
		yield put(postsActions.getPostError(err));
	}
}

function* updatePost({ payload }) {
	try {
		yield put(postsActions.updatePost(payload));
	} catch (err) {
		yield put(postsActions.getPostsError(err));
	}
}

function* getComments({ payload: postId }) {
	try {
		const comments = yield call(fetchComments, postId);
		yield put(commentsActions.getCommentsSuccess(comments));
	} catch (err) {
		// yield errorToast({ messageText: err });
		yield put(commentsActions.getCommentsError(err));
	} finally {
		// yield put(spinner.close());
	}
}
// ---------------------------------------------------------------------

export default function* watchers() {
	yield takeLeading(postsActions.getPosts.type, getPosts);
	yield takeLeading(postActions.getPost.type, getPost);
	yield takeLeading(postsActions.createPost.type, createPost);
	yield takeLeading(postsActions.updatePost.type, updatePost);
	yield takeLeading(commentsActions.getComments.type, getComments);
}
