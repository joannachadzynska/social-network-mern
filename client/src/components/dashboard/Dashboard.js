import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	getCurrentProfile,
	deleteAccountAndProfile,
} from "../../redux/actions/profile.actions";

import Spinner from "../layout/+Spinner";
import DashboardActions from "./DashboardActions";
import Experiences from "./Experiences";
import Education from "./Education";

const Dashboard = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const profile = useSelector((state) => state.profile);
	const { profile: currentProfile, loading } = profile;
	const setCurrentProfile = () => dispatch(getCurrentProfile());

	useEffect(() => {
		if (currentProfile === null) {
			setCurrentProfile();
		}
	}, [setCurrentProfile]);

	return loading && currentProfile === null ? (
		<Spinner />
	) : (
		<>
			<h1 className='large text-primary'>Dashboard</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome {user && user.name}
			</p>
			{currentProfile !== null ? (
				<>
					<DashboardActions />
					{currentProfile.experience.length > 0 && (
						<Experiences experiences={profile.profile.experience} />
					)}

					{currentProfile.education.length > 0 && (
						<Education educationList={profile.profile.education} />
					)}

					<div className='my-2'>
						<button
							className='btn btn-danger'
							onClick={() => dispatch(deleteAccountAndProfile())}>
							<i className='fas fa-user-minus'></i> Delete My Account
						</button>
					</div>
				</>
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
