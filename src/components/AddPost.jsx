import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const AddPost = () => {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [userId, setUserId] = useState("");
    const [msg, setMsg] = useState("");

    const addPost = async () => {

        try {

            await axios.post("https://jsonplaceholder.typicode.com/posts", {
                'title': title,
                'body': postText,
                'userId': userId
            });

            setMsg("Operation Successful!!")

        } catch (error) {

            console.log(error)
            setMsg("Operation Failed", error);

        }


    }

    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='card'>

                            <div className='card-header m-4'>
                                Enter Post Details
                            </div>

                            <div className='card-body '>
                                {
                                    msg !== "" ? <div className="mb-4">
                                        <div className="alert alert-primary">
                                            {msg}
                                        </div>
                                    </div> : ""
                                }

                                <div className='mb-4'>
                                    <label htmlFor="">Enter Title: </label>
                                    <input type="text" name="" id="" onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="">Enter Post Text: </label>
                                    <textArea onChange={(e) => setPostText(e.target.value)} />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="">Enter User Id: </label>
                                    <input type="number" onChange={(e) => setUserId(e.target.value)} />
                                </div>

                                <div>
                                    <button className='btn btn-primary' onClick={()=>addPost()}>Add Post</button>
                                </div>

                            </div>
                            <div className="card-footer">
                                View All Posts
                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddPost