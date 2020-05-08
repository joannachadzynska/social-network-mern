import uuid from "uuid";
import { ALERT_ACTION_TYPES } from "./types";

export const setAlert = (msg, alertType) => (dispatch) => {
	const id = uuid.v4();
	dispatch({
		type: ALERT_ACTION_TYPES.SET_ALERT,
		payload: {
			msg,
			alertType,
			id,
		},
	});
};

export const removeAlert = (id) => (dispatch) => {
	dispatch({
		type: ALERT_ACTION_TYPES.REMOVE_ALERT,
		payload: {
			id,
		},
	});
};
