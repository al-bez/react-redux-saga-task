import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postActions } from "slices/post";
import { usePostSelector } from "./stateSelectors";
import { Post } from "components/Post";
import { isEmpty } from "lodash";

/**
 * Gets the data from the store after fetching it to the API
 * @returns {object} { post, postLoading, postErrors, renderPost }
 */
export const usePost = () => {
	const dispatch = useDispatch();
	const { id: postId = "" } = useParams();

	const postData = useSelector(state => state.posts.list.find(post => post.id === +postId))

	const {
		data: post,
		loading: postLoading,
		errors: postErrors
	} = usePostSelector();

	useEffect(() => {
		dispatch(postActions.getPost(postData));
	}, [postId]);

	const renderPost = () => {
		if (postLoading) return <p>Loading post...</p>;
		if (postErrors) return <p>Unable to display post.</p>;
		if (isEmpty(post)) return <p>Post Not Found</p>;

		return <Post post={post} />;
	};
	return { postData, postLoading, postErrors, renderPost };
};
