import React,{ createContext, useState, useEffect } from 'react';
import { auth, db, storage } from '../config';
import firebase from 'firebase';
export const ContextProvider = createContext();


const Context = (props) => {
    const [model, setModel] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([])

    const openModel=()=>{
        setModel(true);
    }
    const closeModel=()=>{
        setModel(false);
    }

    const register  = async (user) => {
        const { username, email, password } = user;
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            res.user.updateProfile({displayName: username});
            setModel(false);
        } catch (error) {
            console.log(error)            
        }
    };

    const login = async (user) => {
        const { email, password } = user;
        const res = await auth.signInWithEmailAndPassword(email, password)
        setModel(false);
    };
    const logOut = ()=>{
        auth.signOut().then(()=> {
            setUser(null)
        })
        .catch(err=>{
            console.log(err)
        });
    };
    const creates = (data) => {
        const  {title, image } = data;
        const upload = storage.ref(`images/${image.name}`).put(image)
              upload.on("state_changed", (snapshot) => {
                  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log(progress);
              }, (err) => {
                  console.log(err);
              },()=> {
                  //success funcation/complete funcation
                  storage
                  .ref("images")
                  .child(image.name)
                  .getDownloadURL()
                  .then((url) => {
                      db.collection("posts").add({
                          title,
                          image: url,
                          username: user.displayName,
                          currentTime: firebase.firestore.FieldValue.serverTimestamp()
                      });
                  });
              });
    };
    const publicComment = (data) => {
        const { id, comment} = data;
        db.collection("posts").doc(id).collection("comments").add({
            comment,
            username: user.displayName,
            currentTime: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
        });

        //fetch posts from firebase
        db.collection("posts")
        .orderBy("currentTime", "desc")
        .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().image,
                    username: doc.data().username,
                }))
            ); 
        });
    }, [user, loading]);


    return ( 
        <ContextProvider.Provider value={{ model, openModel, closeModel, register, login, user, loading, logOut, creates, posts, publicComment }}>
            {props.children}
        </ContextProvider.Provider>
     );
}
 
export default Context;