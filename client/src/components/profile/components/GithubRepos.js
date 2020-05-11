import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGitHubRepos } from "../../../redux/actions/profile.actions";
import PropTypes from "prop-types";
import { Spinner } from "../../layout";
import Repo from "./Repo";

const GithubRepos = ({ username }) => {
	const dispatch = useDispatch();
	const repos = useSelector((state) => state.profile.repos);

	useEffect(() => {
		dispatch(getGitHubRepos(username));
	}, [username, dispatch]);

	return (
		<div className='profile-github'>
			<h2 className='text-primary my-1'>
				<i className='fab fa-github'></i> Github Repos
			</h2>

			{repos === null ? (
				<Spinner />
			) : (
				repos.map((repo) => <Repo key={repo._id} repo={repo} />)
			)}
		</div>
	);
};

GithubRepos.propTypes = {
	username: PropTypes.string.isRequired,
};

export default GithubRepos;
