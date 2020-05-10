import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EducationItem from "./EducationItem";

const Education = ({ educationList }) => {
	return (
		<>
			<h2 className='my-2'>Education Credentials</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>School</th>
						<th className='hide-sm'>Degree</th>
						<th className='hide-sm'>Years</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{educationList.map((education) => (
						<EducationItem key={education._id} education={education} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default Education;
