import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const EducationItem = ({ education }) => {
	const { school, degree, from, to } = education;

	return (
		<tr>
			<td>{school}</td>
			<td className='hide-sm'>{degree}</td>
			<td className='hide-sm'>
				{" "}
				<Moment format='YYYY/MM/DD'>{from}</Moment> -{" "}
				{to === null ? " Now" : <Moment format='YYYY/MM/DD'>{to}</Moment>}
			</td>
			<td>
				<button className='btn btn-danger'>Delete</button>
			</td>
		</tr>
	);
};

EducationItem.propTypes = {
	education: PropTypes.object,
};

export default EducationItem;
