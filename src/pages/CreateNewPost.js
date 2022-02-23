import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { postsActions } from "slices/posts";
import { usePostsSelector } from './../customHooks/stateSelectors';

const CreateNewPost = memo(() => {

	const { id: postId = "" } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const { list } = usePostsSelector();

	const isCreating = postId === ""
	const isEditing = postId !== ""


	const newUserId = list.length
		? Math.max(...list.map(el => el.userId)) + 1
		: 1

	const newPostId = list.find(el => el.userId === newUserId)
		? list.find(el => el.userId === newUserId).id
		: 1

	const postData = useSelector(state => state.posts.list.find(post => post.id === +postId)) ?? {}


	const [title, setTitle] = useState(isEditing ? postData.title : "");
	const [content, setContent] = useState(isEditing ? postData.body : "");

	const newPost = {
		userId: newUserId,
		id: newPostId,
		title: title,
		body: content
	}

	const updatedPost = {
		userId: postData.userId,
		id: postData.id,
		title: title,
		body: content
	}

	const titleHandler = ({ target: { value } }) => setTitle(value)
	const contentHandler = ({ target: { value } }) => setContent(value)

	const submitHandler = (e) => {
		e.preventDefault()

		if (isCreating) {
			dispatch(postsActions.createPost(newPost));
			history.push(`/posts/${newPostId}`);
		}
		if (isEditing) {
			dispatch(postsActions.updatePost(updatedPost));
			history.push(`/posts/${postId}`);
		}
	}

	const cancelHandler = () => history.push(`/posts`);
	return (
		<section>
			{isCreating && <h1>Create New Post </h1>}
			{isEditing && <h1>Update Post </h1>}
			<form className="form-wrapper" onSubmit={submitHandler}>
				<div className="form-inputs">
					<div>
						<label>
							Title:
								<input type="text" value={title} name="name" onChange={titleHandler} />
						</label>
					</div>
					<div>
						<label>
							Content:
								<textarea name="content" value={content} onChange={contentHandler} />
						</label>
					</div>
				</div>
				<div className="form-buttons">
					<button type="submit" className="button">Submit</button>
					<button type="reset" className="button" onClick={cancelHandler}>Cancel</button>
				</div>
			</form>
		</section>
	);
});

export default CreateNewPost;
