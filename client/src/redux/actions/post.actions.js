import { POST_ACTION_TYPES } from "../actions/types";
import { setAlert } from "./alert.actions";
import axios from "axios";

// Get Posts
export const getAllPosts = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/posts");

		dispatch({
			type: POST_ACTION_TYPES.GET_POSTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add like
export const addLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/posts/like/${id}`);

		dispatch({
			type: POST_ACTION_TYPES.UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
// Remove like
export const removeLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/posts/unlike/${id}`);

		dispatch({
			type: POST_ACTION_TYPES.UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/posts/${id}`);

		dispatch({
			type: POST_ACTION_TYPES.DELETE_POST,
			payload: id,
		});
		dispatch(setAlert("Post removed", "success"));
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add post
export const addPost = (formData) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const res = await axios.post("/api/posts", formData, config);

		dispatch({
			type: POST_ACTION_TYPES.ADD_POST,
			payload: res.data,
		});

		dispatch(setAlert("Post created", "success"));
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Get Post
export const getPost = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/posts/${id}`);

		dispatch({
			type: POST_ACTION_TYPES.GET_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add comment

export const addComment = (postId, formData) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const res = await axios.post(
			`/api/posts/comment/${postId}`,
			formData,
			config
		);

		dispatch({
			type: POST_ACTION_TYPES.ADD_COMMENT,
			payload: res.data,
		});

		dispatch(setAlert("Comment added", "success"));
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Remove comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
	try {
		await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

		dispatch({
			type: POST_ACTION_TYPES.REMOVE_COMMENT,
			payload: commentId,
		});

		dispatch(setAlert("Comment removed", "success"));
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
