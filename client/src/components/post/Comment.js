import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../redux/actions/post.actions";

const Comment = ({
	comment: { _id, text, name, user, avatar, date },
	postId,
}) => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<Link to={`/profile/${user}`}>
					<img className='round-img' src={avatar} alt='' />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p className='my-1'>{text}</p>
				<p className='post-date'>
					Posted on <Moment form='YYYY/MM/DD'>{date}</Moment>
				</p>
				{!auth.loading && user === auth.user._id && (
					<button
						type='button'
						className='btn btn-danger'
						onClick={(e) => dispatch(deleteComment(postId, _id))}>
						<i className='fas fa-times'></i>
					</button>
				)}
			</div>
		</div>
	);
};

Comment.propTypes = {
	postId: PropTypes.number.isRequired,
	comment: PropTypes.object.isRequired,
};

export default Comment;
