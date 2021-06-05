import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const BlogDetail = ({ blogId }) =>{

	const [blogDetail, setBlogDetail] = useState({});
	const [blogAdmin, setBlogAdmin] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		fetch(`https://hidden-eyrie-46633.herokuapp.com/admin/blogs/${blogId}`, {
			mode : 'cors',
			headers: {
					Authorization:JSON.parse(localStorage.getItem('token'))
				}
		})
 		.then(response => {
 			 if (!response.ok) {
		        throw new Error("ERROR: HTTP status " + response.status);
		    }
 			return response.json()
 		})
  		.then(data => {
  				setBlogDetail(data); 
  				setBlogAdmin(data.postedBy.Adminname)
		})
  		.catch(err => setErrorMessage(err.message))
  		//eslint-disable-next-line
	}, [])


	return(
	<>
		<Navbar />
		{!errorMessage && 
			<div className="blogdetail"> 
				<h1>{blogDetail.title}</h1>
				<p>{blogDetail.text}</p>
				<p><b>Date:</b> {blogDetail.time}</p>
				<p><b>Postedby:</b> {blogAdmin}</p>
				<p><b>IsPublished:</b> {String(blogDetail.isPublished)}</p>
				
				<div className="btn-links">
					<Link to={`/blogs/${blogDetail._id}/comments/` }>
						<button className="linkBtn">
								Show Comments
						</button>
					</Link>
					<Link to={`/blogs/${blogDetail._id}/edit/` }>
						<button className="linkBtn">
								Edit Blog
						</button>
					</Link>
					<Link to={`/blogs/${blogDetail._id}/delete/` }>
						<button className="linkBtn">
								Delete Blog
						</button>
					</Link>
				</div>
			</div> 
		} 
		{errorMessage &&
		 <p style={{textAlign: "center", fontWeight:"bold"}}>
		 	{errorMessage}
		 </p>
		}
   	</>
   )
}

export default BlogDetail;