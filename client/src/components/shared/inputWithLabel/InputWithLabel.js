import React from "react";

const InputWithLabel = ({ children, onInputChange, value, ...props }) => {
	const { type } = props;
	return (
		<div className='form-group'>
			<label>{children}</label>
			<input onChange={onInputChange} value={value} {...props} />
			{type === "email" && (
				<small className='form-text'>
					This site uses Gravatar so if you want a profile image, use a Gravatar
					email
				</small>
			)}
		</div>
	);
};

export default InputWithLabel;
