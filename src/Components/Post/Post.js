import React, {useState} from 'react';
import no_image from './No-image.png';
import './Post.css'
import { useSelector } from '../PostList/PostsSlice.js'

const Post = ({post}) => {

  const postImage = () => {
    if (!post.img){
      return false;
      } else {
        return post.img;
      }
  };

  const [img, setImg] = useState(postImage);

  return (
    <article>
      <h3>{post.title}</h3>
      {postImage()}
      <p className="ellipsis">{ post.text }</p>
      <div className= 'post_info'>
        <p>{post.author}</p>
        <p>{post.num_comments}</p>
      </div>
    </article>
    )
}

export default Post; 
