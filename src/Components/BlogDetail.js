import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

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
		{!errorMessage && 
			<div className="blog"> 
				<h1 style={{textAlign: "center"}}>{blogDetail.title}</h1>
				<h2>isPublished: {String(blogDetail.isPublished)}</h2>
				<p className="blogDesc">{blogDetail.text}</p>
				<div className="blogDetails">
					<p><b>Date:</b> {blogDetail.time}</p>
					<p><b>Postedby:</b> {blogAdmin}</p>
				</div>
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