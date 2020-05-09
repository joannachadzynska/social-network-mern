import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../../redux/actions/auth.actions";
import { InputWithLabel } from "../../shared";

const Login = () => {
	const dispatch = useDispatch();

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const handleChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to='/dashboard'>dashboard</Redirect>;
	}

	return (
		<>
			<h1 className='large text-primary'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Sign into Your Account
			</p>
			<form className='form' onSubmit={handleSubmit}>
				<InputWithLabel
					type='email'
					placeholder='Email Address'
					name='email'
					value={email}
					onInputChange={handleChange}
					required>
					Email Address
				</InputWithLabel>

				<InputWithLabel
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onInputChange={handleChange}>
					Password
				</InputWithLabel>

				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p className='my-1'>
				Don't have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</>
	);
};

export default Login;
