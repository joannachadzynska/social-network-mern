import axios from "axios";
import { AUTH_ACTION_TYPES } from "./types";
import { setAlert } from "./alert.actions";

// Register user
export const register = ({ name, email, password }) => async (dispatch) => {
	const newUser = {
		name,
		email,
		password,
	};
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const body = JSON.stringify(newUser);
	try {
		const res = await axios.post("/api/users", body, config);
		dispatch({ type: AUTH_ACTION_TYPES.REGISTER_SUCCESS, payload: res.data });
	} catch (error) {
		const errors = error.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}
		dispatch({ type: AUTH_ACTION_TYPES.REGISTER_FAILURE });
	}
};
