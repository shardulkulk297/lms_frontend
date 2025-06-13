import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/course/getCoursesByAuthor", {
                    headers: { "Authorization": "Bearer " + localStorage.getItem('token') }
                })
                setCourses(response.data);
            } catch (error) {

                console.log(error);

            }
        }
        getCourses();
    }, [])
    return (
        <div>
            <h1>Courses</h1>
            <div className='container'>
                <div className='row'>
                    {
                        courses.map((c) => (
                            <div className='col-md-4 mb-4'>
                                <div className="card" style={{width: "25rem"}}>
                                    <img src={`../images/${c.courseImage}`} className="card-img-top" alt={c.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{c.title}</h5>
                                        <h6 className='card-text'>{c.credits}</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
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

export default Courses