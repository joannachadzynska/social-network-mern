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
		const res = await axios.delete(`/api/posts/${id}`);

		dispatch({
			type: POST_ACTION_TYPES.DELETE_POST,
			payload: id,
		});
		dispatch(setAlert("Post remove", "success"));
	} catch (err) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
