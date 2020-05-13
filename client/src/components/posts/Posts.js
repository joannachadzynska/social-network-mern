import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/post.actions";
import { Spinner } from "../layout";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = () => {
	const dispatch = useDispatch();
	const post = useSelector((state) => state.post);
	const { posts, loading } = post;

	const getPosts = useCallback(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return loading ? (
		<Spinner />
	) : (
		<>
			<h1 className='large text-primary'>Posts</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome to the community!
			</p>

			<PostForm />

			<div className='posts'>
				{posts !== null &&
					posts.map((post) => <PostItem key={post._id} post={post} />)}
			</div>
		</>
	);
};

export default Posts;
