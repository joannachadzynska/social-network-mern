import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPost } from "../../redux/actions/post.actions";
import { Spinner } from "../layout";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";

const Post = ({ match }) => {
	const posts = useSelector((state) => state.post);
	const { post, loading } = posts;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost(match.params.id));
	}, [dispatch, getPost]);

	return loading || post === null ? (
		<Spinner />
	) : (
		<>
			<Link to='/posts' class='btn'>
				Back To Posts
			</Link>
			<PostItem post={post} showActions={false} />
			<CommentForm postId={post._id} />
		</>
	);
};
export default Post;
