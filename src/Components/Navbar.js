import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () =>{

	const handleLogout =() =>{
		localStorage.clear();
		window.location.href = "/"
	}

	return(
		<nav className="navbar ">
	        <Link to="/blogs" className="navlink">BLOGS</Link>  
	        <button className="linkBtn" onClick={handleLogout}>Logout</button>      
	   </nav>
   	
   )
}

export default Navbar;