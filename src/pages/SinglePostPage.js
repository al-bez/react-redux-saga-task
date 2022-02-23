import React from "react";
import { usePost } from "customHooks/usePost";
import { useComments } from "customHooks/useComments";
import { useHistory } from 'react-router-dom';

const SinglePostPage = () => {
	// We split logic into multiple hooks to avoid poluting
	// the component and follow SoC principle, also having
	// separate hooks allows to reuse them somewhere else
	const { postData, renderPost } = usePost();
	const { renderComments } = useComments();

	const history = useHistory();

	const editHandler = () => {
		history.push(`/edit_post/${postData.id}`);
	}

	return (
		<section>
			{renderPost()}
			{
				postData && (
					<div>
						<button className="button" onClick={editHandler} >Edit Post</button>
					</div>
				)
			}

			{postData && renderComments()}
		</section>
	);
};

export default SinglePostPage;
