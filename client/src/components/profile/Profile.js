import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileById } from "../../redux/actions/profile.actions";
import { Spinner } from "../layout";

const Profile = ({ match }) => {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.profile);
	const auth = useSelector((state) => state.auth);
	const { profile: userProfile, loading } = profile;

	useEffect(() => {
		dispatch(getProfileById(match.params.id));
	}, [dispatch, match.params.id]);

	return (
		<>
			{userProfile === null || loading ? (
				<Spinner />
			) : (
				<>
					<h1>
						<Link to='/profiles' className='btn btn-primary'>
							Back to profiles
						</Link>
						{auth.isAuthenticated &&
							!auth.loading &&
							auth.user._id === userProfile.user?._id && (
								<Link to='/edit-profile' className='btn btn-dark'>
									Edit profile
								</Link>
							)}
					</h1>
				</>
			)}
		</>
	);
};

export default Profile;
