import React from "react";
import PropTypes from "prop-types";

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

InputWithLabel.propTypes = {
	value: PropTypes.string.isRequired,
	onInputChange: PropTypes.func.isRequired,
	children: PropTypes.string,
};

export default InputWithLabel;
