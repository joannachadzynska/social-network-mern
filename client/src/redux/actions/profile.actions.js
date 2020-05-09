import axios from "axios";
import { setAlert } from "./alert.actions";
import { PROFILE_ACTION_TYPES } from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/profile/me");
		dispatch({ type: PROFILE_ACTION_TYPES.GET_PROFILE, payload: res.data });
	} catch (error) {
		dispatch({
			type: PROFILE_ACTION_TYPES.PROFILE_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};
