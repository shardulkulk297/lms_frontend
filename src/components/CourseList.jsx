import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        const getCourses = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/course/getAll");
                console.log(response);W
                setCourses(response.data);

            } catch (error) {WW
                console.log(error);

            }
        }
        getCourses();


    }, []);
    return (
        <div className='container'>
            <div className='row'>

                {
                    courses.map((c) => (
                        <div className='col-md-4' key={c.id} >
                            <div className="card" style={{ 'width': '22rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{c.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{c.author.name}</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" className="card-link">View Details</a>
                                    <a href="#" className="card-link">Enroll</a>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>

        </div>


    )
}

export default CourseList