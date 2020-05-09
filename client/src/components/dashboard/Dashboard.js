import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../redux/actions/profile.actions";

import Spinner from "../layout/+Spinner";

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentProfile());
	}, []);

	const auth = useSelector((state) => state.auth);
	const profile = useSelector((state) => state.profile);

	const { user } = auth;
	const { profile: currentProfile, loading } = profile;

	return loading && currentProfile === null ? (
		<Spinner />
	) : (
		<>
			<h1 className='large text-primary'>Dashboard</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome {user && user.name}
			</p>
			{currentProfile !== null ? (
				<>has</>
			) : (
				<>
					<p>You have not yet setup a profile, please add some info</p>
					<Link to='/create-profile' className='btn btn-primary my-1'>
						Create Profile
					</Link>
				</>
			)}
		</>
	);
};

export default Dashboard;
