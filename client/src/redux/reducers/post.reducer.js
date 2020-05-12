import { POST_ACTION_TYPES } from "../actions/types";

const initState = {
	posts: [],
	post: null,
	loading: true,
	error: {},
};

const post = (state = initState, { type, payload }) => {
	switch (type) {
		case POST_ACTION_TYPES.GET_POSTS:
			return {
				...state,
				posts: payload,
				loading: false,
			};
		case POST_ACTION_TYPES.POST_ERROR:
			return {
				...state,
				posts: null,
				loading: false,
				error: payload,
			};

		default:
			return state;
	}
};

export default post;
