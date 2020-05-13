import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPost } from "../../redux/actions/post.actions";
import { Spinner } from "../layout";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

const Post = ({ match }) => {
	const posts = useSelector((state) => state.post);
	const { post, loading } = posts;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost(match.params.id));
	}, [dispatch, match.params.id]);

	return loading || post === null ? (
		<Spinner />
	) : (
		<>
			<Link to='/posts' class='btn'>
				Back To Posts
			</Link>
			<PostItem post={post} showActions={false} />
			<div className='comments'>
				{post.comments.map((comment) => (
					<Comment key={comment._id} comment={comment} postId={post._id} />
				))}
			</div>
			<CommentForm postId={post._id} />
		</>
	);
};

export default Post;
