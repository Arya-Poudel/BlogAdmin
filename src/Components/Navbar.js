import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () =>{

	const handleLogout =() =>{
		localStorage.clear();
		window.location.href = "https://arya-poudel.github.io/BlogAdmin/#/"
	}

	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('https://hidden-eyrie-46633.herokuapp.com/admin/blogs', 
			{
				mode : 'cors',
				headers: {
					Authorization:JSON.parse(localStorage.getItem('token'))
				}
			}
		)
 		.then(response => {
 			 if (!response.ok) {
 			 	localStorage.clear();
		        throw new Error("ERROR: HTTP status " + response.status);
		    }
 			return response.json();
 		})
  		.then(data => {
  			setMessage('LOGOUT');
  		})
  		.catch(err => {
  			console.log(err);
  			setMessage('LOGIN');
  		})
	})



	return(
		<nav className="navbar ">
			<h1>DEMO ADMIN</h1>
			<div >
		        <Link to="/blogs" className="navlink">BLOGS</Link> 
				<a href="https://arya-poudel.github.io/BlogViewer/#/" className="navlink">VIEWER</a> 
			    {message==='LOGOUT' && 
			        <button className="linkBtn" onClick={handleLogout}>Logout</button> 
			    }
			    
	        </div>     
	   </nav>
   	
   )
}

export default Navbar;