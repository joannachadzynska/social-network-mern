import { ALERT_ACTION_TYPES } from "../actions/types";

const initialState = [];

const alert = (state = initialState, { type, payload }) => {
	switch (type) {
		case ALERT_ACTION_TYPES.SET_ALERT:
			return [...state, payload];

		case ALERT_ACTION_TYPES.REMOVE_ALERT:
			return state.filter((alert) => alert.id !== payload);

		default:
			return state;
	}
};

export default alert;
