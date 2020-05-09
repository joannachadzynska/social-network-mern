import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profile.actions";

const Dashboard = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const profile = useSelector((state) => state.profile);

	useEffect(() => {
		dispatch(getCurrentProfile());
	}, []);

	return <div>Dashboard</div>;
};

export default Dashboard;
