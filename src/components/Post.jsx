import React, { useEffect, useState } from 'react'

const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //Calling API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
    }, []);

    return (
        <div className='container'>
            <div className='row'>


                {
                    posts.map((p) => (
                        <div className='col-md-3 mb-3' >
                            <div className="card" style={{ width: '18rem' }} key={p.id}>
                                <div className="card-body">
                                    <h5 className='card-text'>{p.id}</h5>
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">{p.body}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }





            </div>



        </div>
    )
}

export default Post