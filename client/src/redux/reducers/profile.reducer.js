import { PROFILE_ACTION_TYPES } from "../actions/types";

const initState = {
	profile: null,
	profiles: [],
	repos: [],
	loading: true,
	error: {},
};

const profile = (state = initState, { type, payload }) => {
	switch (type) {
		case PROFILE_ACTION_TYPES.GET_PROFILE:
		case PROFILE_ACTION_TYPES.UPDATE_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false,
			};

		case PROFILE_ACTION_TYPES.PROFILE_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};

		case PROFILE_ACTION_TYPES.CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				repos: [],
				loading: false,
			};

		case PROFILE_ACTION_TYPES.GET_PROFILES:
			return {
				...state,
				profiles: payload,
				loading: false,
			};

		case PROFILE_ACTION_TYPES.GET_REPOS:
			return {
				...state,
				repos: payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default profile;
