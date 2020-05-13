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

		case POST_ACTION_TYPES.UPDATE_LIKES:
			return {
				...state,
				loading: false,
				posts: state.posts.map((post) =>
					post._id === payload.id ? { ...post, likes: payload.likes } : post
				),
			};

		case POST_ACTION_TYPES.ADD_POST:
			return {
				...state,
				loading: false,
				posts: [payload, ...state.posts],
			};

		case POST_ACTION_TYPES.DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== payload),
				loading: false,
			};

		default:
			return state;
	}
};

export default post;
