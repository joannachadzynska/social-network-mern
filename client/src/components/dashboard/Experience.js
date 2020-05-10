import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const Experience = ({ experience }) => {
	const { company, title, from, to, description } = experience;

	return (
		<tr>
			<td>{company}</td>
			<td className='hide-sm'>{title}</td>
			<td className='hide-sm'>
				<Moment format='YYYY/MM/DD'>{from}</Moment> -{" "}
				{to === null ? " Now" : <Moment format='YYYY/MM/DD'>{to}</Moment>}
			</td>
			<td>
				<button className='btn btn-danger'>Delete</button>
			</td>
		</tr>
	);
};

Experience.propTypes = {
	experience: PropTypes.object,
};

export default Experience;
