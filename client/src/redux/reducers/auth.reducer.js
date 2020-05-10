import { AUTH_ACTION_TYPES, PROFILE_ACTION_TYPES } from "../actions/types";

const initState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loading: true,
	user: null,
};

const auth = (state = initState, { type, payload }) => {
	switch (type) {
		case AUTH_ACTION_TYPES.REGISTER_SUCCESS:
		case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};

		case AUTH_ACTION_TYPES.REGISTER_FAILURE:
		case AUTH_ACTION_TYPES.AUTH_ERROR:
		case AUTH_ACTION_TYPES.LOGIN_FAILURE:
		case AUTH_ACTION_TYPES.LOGOUT:
		case PROFILE_ACTION_TYPES.ACCOUNT_DELETED:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			};

		case AUTH_ACTION_TYPES.USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};

		default:
			return state;
	}
};

export default auth;
