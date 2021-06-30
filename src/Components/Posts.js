import React,{useContext} from 'react'
import { ContextProvider } from '../Global/Context'
import Comments from './Comments';

const Posts = () => {
    const { posts } = useContext(ContextProvider);
    return (
     <>
     {posts.map(post=>(
        <div className="posts" key={post.id}>
        <div className="posts_header">
            <div className="posts_header_avator">{post.username[0]}</div>
            <div className="posts_header-name">{post.username}</div>
        </div>
        <div className="posta_img">
            <img src={post.image} alt={post.image} />
        </div>
        <Comments id={post.id} />
    </div>
     ))}
     </>
    );
};

export default Posts
