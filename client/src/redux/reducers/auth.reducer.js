import { AUTH_ACTION_TYPES } from "../actions/types";

const initState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loading: true,
	user: null,
};

const auth = (state = initState, { type, payload }) => {
	switch (type) {
		case AUTH_ACTION_TYPES.REGISTER_SUCCESS:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};

		case AUTH_ACTION_TYPES.REGISTER_FAILURE:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};

		default:
			return state;
	}
};

export default auth;
