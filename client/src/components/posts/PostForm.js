import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions/post.actions";

const PostForm = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const handleChange = (e) => setText(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addPost({ text }));
		// setFormData("");
	};

	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Say Something...</h3>
			</div>
			<form className='form my-1' onSubmit={handleSubmit}>
				<textarea
					name='text'
					cols='30'
					rows='5'
					placeholder='Create a post'
					value={text}
					onChange={handleChange}
					required></textarea>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

export default PostForm;