import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../../redux/actions/alert.actions";
import { register } from "../../../redux/actions/auth.actions";
import { InputWithLabel } from "../../shared";

const Register = () => {
	const dispatch = useDispatch();

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			dispatch(setAlert("Passwords don't match", "danger"));
		} else {
			dispatch(register({ name, email, password }));
		}
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to='/dashboard'>dashboard</Redirect>;
	}

	return (
		<>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Create Your Account
			</p>
			<form className='form' onSubmit={handleSubmit}>
				<InputWithLabel
					type='text'
					placeholder='Name'
					name='name'
					value={name}
					onInputChange={onChange}
					required>
					Name
				</InputWithLabel>

				<InputWithLabel
					type='email'
					placeholder='Email Address'
					name='email'
					value={email}
					onInputChange={onChange}
					required>
					Email
				</InputWithLabel>

				<InputWithLabel
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onInputChange={onChange}
					minLength='6'>
					Password
				</InputWithLabel>

				<InputWithLabel
					type='password'
					placeholder='Confirm Password'
					name='password2'
					value={password2}
					onInputChange={onChange}
					minLength='6'>
					Confirm Password
				</InputWithLabel>

				<input type='submit' className='btn btn-primary' value='Register' />
			</form>
			<p className='my-1'>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</>
	);
};

export default Register;
