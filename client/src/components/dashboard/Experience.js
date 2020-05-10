import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../../redux/actions/profile.actions";

const Experience = ({ experience }) => {
	const { company, title, from, to, description, _id } = experience;
	const dispatch = useDispatch();

	return (
		<tr>
			<td>{company}</td>
			<td className='hide-sm'>{title}</td>
			<td className='hide-sm'>
				<Moment format='YYYY/MM/DD'>{from}</Moment> -{" "}
				{to === null ? " Now" : <Moment format='YYYY/MM/DD'>{to}</Moment>}
			</td>
			<td>
				<button
					id={_id}
					onClick={(e) => dispatch(deleteExperience(e.target.id))}
					className='btn btn-danger'>
					Delete
				</button>
			</td>
		</tr>
	);
};

Experience.propTypes = {
	experience: PropTypes.object,
};

export default Experience;
