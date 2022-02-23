import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useCommentsSelector } from "./stateSelectors";
import { commentsActions } from "slices/comments";
import { Comment } from "components/Comment";

/**
 * Gets the data from the store after fetching it to the API
 * @returns {object} { comments, commentsLoading, commentsErrors, renderComments }
 */
export const useComments = () => {
  const dispatch = useDispatch();
  const { id: postId = "" } = useParams();
  const { list: comments, errors: commentsErrors } = useCommentsSelector();

  useEffect(() => {
    dispatch(commentsActions.getComments(postId));
  }, [postId]);

  const renderComments = () => {
    if (!comments) return <p>Loading comments...</p>;
    if (commentsErrors) return <p>Unable to display comments.</p>;
    if (!comments.length) return <></>;

    return (
      <>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </>
    );
  };

  return { comments, commentsErrors, renderComments };
};
