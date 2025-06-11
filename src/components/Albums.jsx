import React, { useEffect, useState } from 'react'

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((data) => setAlbums(data))
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {
                    albums.map((a) => (

                        <div className='col-md-3 mb-4'>
                            <div className="card" style={{ width: '18rem' }} key={a.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{a.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">userId: {a.userId}</h6>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Id: {a.id}</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                        </div>

                    ))
                }

            </div>
           




        </div>
    )
}

export default Albums