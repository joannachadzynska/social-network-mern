import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileById } from "../../redux/actions/profile.actions";
import { Spinner } from "../layout";
import {
	ProfileTop,
	ProfileAbout,
	ProfileExperience,
	ProfileEducation,
	GithubRepos,
} from "./components";

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
					<Link to='/profiles' className='btn btn-primary'>
						Back to profiles
					</Link>
					{auth.isAuthenticated &&
						auth.loading === false &&
						auth.user._id === userProfile.user?._id && (
							<Link to='/edit-profile' className='btn btn-dark'>
								Edit profile
							</Link>
						)}

					<div className='profile-grid my-1'>
						<ProfileTop profile={userProfile} />
						<ProfileAbout profile={userProfile} />
						<div className='profile-exp bg-white p-2'>
							<h2 className='text-primary'>Experience</h2>
							{userProfile.experience.length > 0 ? (
								<>
									{userProfile?.experience.map((experience) => (
										<ProfileExperience
											key={experience._id}
											experience={experience}
										/>
									))}
								</>
							) : (
								<h4>No experience credentials</h4>
							)}
						</div>
						<div className='profile-edu bg-white p-2'>
							<h2 className='text-primary'>Education</h2>
							{userProfile.education.length > 0 ? (
								<>
									{userProfile?.education.map((education) => (
										<ProfileEducation
											key={education._id}
											education={education}
										/>
									))}
								</>
							) : (
								<h4>No education credentials</h4>
							)}
						</div>

						{userProfile.githubusername && (
							<GithubRepos username={userProfile.githubusername} />
						)}
					</div>
				</>
			)}
		</>
	);
};

export default Profile;
