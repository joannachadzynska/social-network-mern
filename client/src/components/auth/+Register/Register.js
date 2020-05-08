import React, { useState } from "react";
import { InputWithLabel } from "../../shared";

const Register = () => {
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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log("Passwords don't match");
		} else {
			console.log(formData);
		}
	};

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
				Already have an account? <a href='login.html'>Sign In</a>
			</p>
		</>
	);
};

export default Register;
