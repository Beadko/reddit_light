import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPosts, getPosts } from './PostsSlice.js';


const SideBar = () => {
	const dispatch = useDispatch();

	useEffect(() => {
				dispatch(getPosts());
	},[dispatch]);

	return(

	)
}
export default SideBar
;