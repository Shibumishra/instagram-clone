import React, { useContext, useEffect, useState } from 'react'
import { ContextProvider } from '../Global/Context';
import { db } from '../config';

const Comments = (props) => {
    const { user, loading, publicComment } = useContext(ContextProvider);
    const [state, setState] = useState('');
    const [comment, setComment] = useState([]);
    const postComment= (e) => {
        e.preventDefault();
        publicComment({id: props.id, comment: state})
        setState("");
    }
    useEffect(() => {
        db.collection("posts").doc(props.id).collection("comments").orderBy("currentTime", "desc").onSnapshot(snapshot => {
            setComment(snapshot.docs.map((doc)=> doc.data()));
        })
    }, [])
    return (
        <div className="comments">
            {comment.map((comment=> (
                <div className="comments_container" key={comment.id}>
                    <div className="comments_container-name">{comment.username}</div>
                    <div className="comments_container-msg">{comment.comment}</div>
                </div>
            )))}
            <div className="comments_section">
               {!loading && user ? ( 
                <form onSubmit={postComment}>
                  <input type="text" 
                    className="comment_input" 
                    placeholder="Add a comment.."
                    onChange={(e) => setState(e.target.value)}
                    value={state} 
                    required 
                  />
                </form> 
                ) : ( 
                 ""
                )}
            </div>
        </div>
    )
}

export default Comments
