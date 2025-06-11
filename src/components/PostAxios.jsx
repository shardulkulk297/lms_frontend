import axios from 'axios';
import React, { useState, useEffect } from 'react'

const PostAxios = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const getPosts = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                console.log(response);
                setPosts(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getPosts();


    }, [])

    return (
        <div>PostAxios

            <div className='container'>
                <div className='row'>
                    {
                        posts.map((p) => (
                            <div className='col-md-3 mb-3' key={p.id} >
                                <div className="card" style={{ width: '18rem' }} key={p.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text">{p.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }





                </div>







            </div>
        </div>
    )
}

export default PostAxios