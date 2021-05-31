import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';


const BlogList = () =>{

	const [bloglist, setBlogList] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	console.log(localStorage.getItem('token'))

	useEffect(() => {
		fetch('http://localhost:5000/admin/blogs', 
			{
				mode : 'cors',
				headers: {
					Authorization:JSON.parse(localStorage.getItem('token'))
				}
			}
		)
 		.then(response => {
 			 if (!response.ok) {
		        throw new Error("ERROR: HTTP status " + response.status);
		    }
 			return response.json();
 		})
  		.then(data => setBlogList(data))
  		.catch(err => setErrorMessage(err.message))
	}, [])

	
	return(
	<>
		<h1 style={{textAlign: "center"}}> BlogList </h1>
		{!errorMessage && 
			<div>
		        {bloglist.map(blog => (
		        	<Link to={`/blogs/${blog._id}`} key={blog._id} className="link">
						<div className="blog"> 
							<h1 style={{textAlign: "center"}}>{blog.title}</h1>
							<p className="blogDesc">{blog.truncated_text} ......</p>
						</div>
					</Link>
		   
				   )
				)}
			<Link to="/blogs/new">
				<button className="linkBtn">
						Create a New Blog
				</button>
			</Link>
			</div>
		}
		{errorMessage &&
			 <p style={{textAlign: "center", fontWeight:"bold"}}>
			 	{errorMessage}
			 </p>
		}
	</>
  );
}

export default BlogList;