import React, {useState} from 'react';
import Reddit from '../../util/Reddit.js';
import no_image from './No-image.png';
import './Post.css'

const Post = ({post}) => {

  const postThumbnail= () => {
    if (!post.thumbnail){
      return no_image;
      } else {
        return post.thumbnail;
      }
  };

  const [thumbnail, setThumbnail] = useState(postThumbnail);

  const thumbnailNotLoading =()=> {
    setThumbnail(no_image);
  };

  return (
    <article>
      <h3>{post.title}</h3>
      <img src={thumbnail} alt="post image" onError={thumbnailNotLoading}/>
    </article>
    )
}

export default Post; 
