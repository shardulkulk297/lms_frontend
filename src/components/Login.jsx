import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [msg, setMsg] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const login = async () => {
        const encodedString = window.btoa(username + ":" + password);

        try {
            const response = await axios.get('http://localhost:8080/api/user/token', {
                headers: {
                    "Authorization": "Basic " + encodedString
                }
            })
            console.log(response)
            let token = response.data;
            console.log(token);

            localStorage.setItem("token", token);

           let details = await axios.get("http://localhost:8080/api/user/details",{
            headers:{ "Authorization":  "Bearer " + token}
           })

           console.log(details);
           const role = details.data.user.role;

           switch(role){
                case "LEARNER":
                    console.log("LEARNER DASHBOARD");
                    break;
                case "AUTHOR":
                    console.log("AUTHOR DASHBOARD");
                    break;
                case "EXECUTIVE":
                    console.log("EXECUTIVE DASHBOARD");
                    break;
                default:
                    setMsg("SOMETHING WENT WRONG");
                    
            }

            setMsg("Login Successfull");

        } catch (error) {
            console.log(error);
            setMsg("Invalid Credentials");
        }
    }

    return (
        <div className='container'>

            <div className='row'>

                <div className='col-lg-12'>

                    <br /><br /><br /><br />

                </div>

            </div>

            <div className='row'>

                <div className='col-md-3'></div>
                <div className='col-md-5'>

                    <div className='card'>
                        <div className='card-header'>
                            Login
                        </div>
                        <div className='card-body'>
                            {msg !== "" ? <div>
                                <div className="alert alert-info" >
                                    {msg}
                                </div>
                            </div> : ""}
                            <div className='mb-2'>
                                <label htmlFor="">Enter Username: </label>
                                <input className='form-control' type="text" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="">Enter Password: </label>
                                <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => login()} className='btn btn-primary'>Login</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            Don't have an Account? Sign Up here.
                        </div>

                    </div>

                </div>
                <div className="col-md-3"> </div>

            </div>


        </div>
    )
}

export default Login