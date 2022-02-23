import { shallowEqual, useSelector } from "react-redux";
import {
  selectPostsList,
  selectPostsLoading,
  selectPostsErrors,
  selectPosts,
  selectPostField,
  selectSettings
} from "sagas/selectors";
import { selectPost } from "sagas/selectors";
import { selectComments } from "sagas/selectors";

// POSTS
// Can grow unnecessarily large
export const usePostsSelector = () => useSelector(selectPosts, shallowEqual);
export const usePostsListSelector = () =>
  useSelector(selectPostsList, shallowEqual);
export const usePostsLoadingSelector = () =>
  useSelector(selectPostsLoading, shallowEqual);
export const usePostsErrorsSelector = () =>
  useSelector(selectPostsErrors, shallowEqual);

// POST
// Explicit and DRY
export const usePostSelector = () => useSelector(selectPost, shallowEqual);
export const usePostFieldSelector = (fieldName) =>
  useSelector(selectPostField(fieldName), shallowEqual);

// COMMENTS
// DRY and scalable
// Also similar approach to LSP (SOLID)
export const useCommentsSelector = (fieldName) => {
  const selector = fieldName ? selectComments(fieldName) : selectComments;
  return useSelector(selector, shallowEqual);
};

// SETTINGS
// For demonstration purposes
export const useSettingsSelector = () =>
  useSelector(selectSettings, shallowEqual);
