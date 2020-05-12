import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { addLike, removeLike } from "../../redux/actions/post.actions";

const PostItem = ({
	post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<Link to='/profile'>
					<img className='round-img' src={avatar} alt='' />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p className='my-1'>{text}</p>
				<p className='post-date'>
					Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
				</p>
				<button
					type='button'
					className='btn btn-light'
					onClick={(e) => dispatch(addLike(_id))}>
					<i className='fas fa-thumbs-up'></i>{" "}
					{likes.length > 0 && <span>{likes.length}</span>}
				</button>
				<button
					type='button'
					className='btn btn-light'
					onClick={(e) => dispatch(removeLike(_id))}>
					<i className='fas fa-thumbs-down'></i>
				</button>
				<Link to={`/posts/${_id}`} className='btn btn-primary'>
					Discussion{" "}
					{comments.length > 0 && (
						<span className='comment-count'>{comments.length}</span>
					)}
				</Link>
				{!auth.loading && user === auth.user._id && (
					<button type='button' className='btn btn-danger'>
						<i className='fas fa-times'></i>
					</button>
				)}
			</div>
		</div>
	);
};

export default PostItem;
