import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DeletePost = () => {
    const [posts, setPosts] = useState([]);
    const [msg, setMsg] = useState("")

    useEffect(() => {
        //Calling API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
    }, []);

    const deletePost = async (postId) => {

        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            let temp = [...posts];
            temp = temp.filter((p) => p.id !== postId);
            setPosts(temp)
            setMsg(postId + "Deleted Successfully");
        } catch (error) {
            setMsg("could Not delete: " + postId + "Because: " + error);
        }
    }

    return (
        <div className='container'>
            <div className='row'>
{
                                msg !== "" ? <div className="mb-4">
                                    <div className="alert alert-primary">
                                        {msg}
                                    </div>
                                </div> : ""
                            }

                {
                    posts.map((p) => (
                        <div className='col-md-3 mb-3' key={p.id}>
                            
                            <div className="card" style={{ width: '18rem' }} >
                                <div className="card-body">

                                    <h5 className='card-text'>{p.id}</h5>
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">{p.body}</p>
                                </div>
                                <button onClick={() => deletePost(p.id)} className='btn btn-danger'>Delete</button>
                            </div>
                        </div>
                    ))
                }





            </div>



        </div>
    )
}

export default DeletePost