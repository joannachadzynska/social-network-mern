import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Experience from "./Experience";

const Experiences = ({ experiences }) => {
	return (
		<>
			<h2 className='my-2'>Experience Credentials</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>Company</th>
						<th className='hide-sm'>Title</th>
						<th className='hide-sm'>Years</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{experiences.map((experience) => (
						<Experience key={experience._id} experience={experience} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default Experiences;
