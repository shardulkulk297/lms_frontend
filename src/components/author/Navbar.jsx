import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../css/author.css';
const Navbar = () => {
    const [name,] = useState(localStorage.getItem('name'));
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
      
            <nav className="navbar navbar-light bg-light justify-content-between" style={{ paddingRight: '30px', display:'flex', justifyContent: 'center', alignContent:'center' }} >
                <div className="navbar-brand "> </div>
                <div className="form-inline mt-2 mb-4 ">
                    Welcome, {name}
                    &nbsp;&nbsp;&nbsp;
                    <button class="btn btn-outline-success" onClick={() => logoutUser()}>Logout</button>
                </div>

            </nav>
    

    )
}

export default Navbar