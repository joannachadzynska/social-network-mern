import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../redux/actions/auth.actions";

const Navbar = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const { isAuthenticated, loading } = auth;

	const handleLogout = () => dispatch(logout());

	const authLinks = (
		<ul>
			<li>
				<a onClick={handleLogout} href='#!'>
					<i className='fas fa-sign-out-alt'></i>
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<NavLink to='#!'>Developers</NavLink>
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
