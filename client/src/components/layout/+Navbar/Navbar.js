import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../redux/actions/auth.actions";
import { clearProfile } from "../../../redux/actions/profile.actions";

const Navbar = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const { isAuthenticated, loading } = auth;

	const handleLogout = () => {
		dispatch(logout());
		dispatch(clearProfile());
	};

	const authLinks = (
		<ul>
			<li>
				<NavLink to='/profiles'>Developers</NavLink>
			</li>
			<li>
				<NavLink to='/Dashboard'>
					<i className='fas fa-user'></i>{" "}
					<span className='hide-sm'>Dashboard</span>
				</NavLink>
			</li>
			<li>
				<a onClick={handleLogout} href='#!'>
					<i className='fas fa-sign-out-alt'></i>{" "}
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<NavLink to='/profiles'>Developers</NavLink>
			</li>
			<li>
				<NavLink to='/register'>Register</NavLink>
			</li>
			<li>
				<NavLink to='/login'>Login</NavLink>
			</li>
		</ul>
	);

	return (
		<nav className='navbar bg-dark'>
			<h1>
				<NavLink to='/'>
					<i className='fas fa-code'></i> DevConnector
				</NavLink>
			</h1>
			{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
		</nav>
	);
};

export default Navbar;
