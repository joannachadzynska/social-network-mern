import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addEducation } from ".././../redux/actions/profile.actions";

const AddEducation = ({ history }) => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		school: "",
		degree: "",
		fieldofstudy: "",
		from: "",
		to: "",
		current: false,
		description: "",
	});

	const [toDateDisabled, toggleDisabled] = useState(false);

	const {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		current,
		description,
	} = formData;

	const handleChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addEducation(formData, history));
		setFormData({
			school: "",
			degree: "",
			fieldofstudy: "",
			from: "",
			to: "",
			current: false,
			description: "",
		});
	};

	return (
		<>
			<h1 className='large text-primary'>Add Your Education</h1>
			<p className='lead'>
				<i className='fas fa-graduation-cap'></i> Add any school, bootcamp, etc
				that you have attended
			</p>
			<small>* = required field</small>
			<form className='form' onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* School or Bootcamp'
						name='school'
						value={school}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* Degree or Certificate'
						name='degree'
						value={degree}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Field Of Study'
						name='fieldofstudy'
						value={fieldofstudy}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<h4>From Date</h4>
					<input type='date' name='from' value={from} onChange={handleChange} />
				</div>
				<div className='form-group'>
					<p>
						<input
							type='checkbox'
							name='current'
							value={current}
							checked={current}
							onChange={(e) => {
								setFormData({ ...formData, current: !current });
								toggleDisabled(!toDateDisabled);
							}}
						/>{" "}
						Current School or Bootcamp
					</p>
				</div>
				<div className='form-group'>
					<h4>To Date</h4>
					<input
						type='date'
						name='to'
						value={to}
						onChange={handleChange}
						disabled={toDateDisabled}
					/>
				</div>
				<div className='form-group'>
					<textarea
						name='description'
						cols='30'
						rows='5'
						placeholder='Program Description'
						value={description}
						onChange={handleChange}></textarea>
				</div>
				<input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</>
	);
};

export default withRouter(AddEducation);
