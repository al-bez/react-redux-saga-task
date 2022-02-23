import BASE_URL from "api/baseUrls.const";

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL.MAIN}/posts`);
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`${BASE_URL.MAIN}/posts/${id}`);
  return response.json();
}

export async function fetchComments(postId) {
  const response = await fetch(`${BASE_URL.MAIN}/comments?postId=${postId}`);
  return response.json();
}
