import React,{ useContext, useState } from 'react'
import { FaCamera } from 'react-icons/fa';
import { ContextProvider } from '../Global/Context';

const Create = () => {
    const { creates,user, loading } = useContext(ContextProvider);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const handleImage = e => {
        setImage(e.target.files[0]);
    };
    const creatPost = (e) => {
        e.preventDefault();
        creates({ title, image });
        setTitle("");
        setImage("");
    }
    return (
        <>
          {!loading && user ? (
              <div className="create">
              <form onSubmit={creatPost}>
                  <div className="create_input">
                      <input type="text" 
                      className="create_inputt" 
                      placeholder="What are in your mind..." 
                      onChange={e => setTitle(e.target.value)}
                      value={title}
                      required
                      />
                  </div>
                  <div className="create_second">
                      <div className="create_second-a">
                          <label htmlFor="file"><FaCamera className="camera" /></label>
                          <input type="file" className="file" onChange={handleImage} id="file" required />
                      </div>
                      <div className="create_second-b">
                          <input type="submit" value="Create" className="btn-sweet" />
                      </div>
                  </div>
              </form>
          </div>
          ) : (
            ""
          )}
        </>
    )
}

export default Create;
