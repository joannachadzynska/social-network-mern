import { POST_ACTION_TYPES } from "../actions/types";
import { setAlert } from "./alert.actions";
import axios from "axios";

// Get Posts
export const getAllPosts = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/posts");
		dispatch({ type: POST_ACTION_TYPES.GET_POSTS, payload: res.data });
	} catch (error) {
		dispatch({
			type: POST_ACTION_TYPES.POST_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};
