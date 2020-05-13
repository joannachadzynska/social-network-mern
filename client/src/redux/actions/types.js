export const ALERT_ACTION_TYPES = {
	SET_ALERT: "[alert] SET_ALERT",
	REMOVE_ALERT: "[alert] REMOVE_ALERT",
};

export const AUTH_ACTION_TYPES = {
	REGISTER_SUCCESS: "[auth register] REGISTER_SUCCESS",
	REGISTER_FAILURE: "[auth register] REGISTER_FAILURE",
	USER_LOADED: "[auth user] USER_LOADED",
	AUTH_ERROR: "[auth user] AUTH_ERROR",
	LOGIN_SUCCESS: "[auth login] LOGIN_SUCCESS",
	LOGIN_FAILURE: "[auth login] LOGIN_FAILURE",
	LOGOUT: "[auth logout] LOGOUT",
	CLEAR_PROFILE: "[profile] CLEAR_PROFILE",
};

export const PROFILE_ACTION_TYPES = {
	CLEAR_PROFILE: "[profile] CLEAR_PROFILE",
	GET_PROFILE: "[profile get] GET_PROFILE",
	GET_PROFILES: "[profile get] GET_PROFILES",
	PROFILE_ERROR: "[profile get] PROFILE_ERROR",
	UPDATE_PROFILE: "[profile update] UPDATE_PROFILE",
	ACCOUNT_DELETED: "[profile delete] ACCOUNT_DELETED",
	GET_REPOS: "[profile github repos] GET_REPOS",
};

export const POST_ACTION_TYPES = {
	GET_POSTS: "[post] GET_POSTS",
	POST_ERROR: "[post] POST_ERROR",
	UPDATE_LIKES: "[post likes] UPDATE_LIKES",
	DELETE_POST: "[post] DELETE_POST",
	ADD_POST: "[post] ADD_POST",
	GET_POST: "[post] GET_POST",
};
