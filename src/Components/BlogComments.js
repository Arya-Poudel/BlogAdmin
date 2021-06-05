import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const BlogComment = ({ blogId }) =>{

	const [blogComments, setBlogComments] = useState([]);
	const [blogTitle, setBlogTitle] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [message, setMessage] = useState('');


	useEffect(() => {
		fetch(`https://hidden-eyrie-46633.herokuapp.com/blogs/${blogId}/comments`, {
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
  			       if (data.length === 0) {
  			       		setMessage('No comments');
  			       } else{
  					setBlogComments(data); 
  					setBlogTitle(data[0].writtenIn.title);
  				  }
  				})
  		.catch(err => setErrorMessage(err.message))
  		//eslint-disable-next-line
	}, [])

	return(
	<>
	<Navbar />
	{(!errorMessage && !message) && 
		<div className="blogcomments ">
			<h1 style={{textAlign: "center"}}>Comments-{blogTitle}</h1>
	        {blogComments.map(comment => (
					<div key={comment._id} className="blogcomment"> 
									<p>{comment.comment}</p>
									<p><b>By:</b> {comment.name}</p>

						<Link to={`/blogs/comments/${comment._id}/delete`} className="linkBtn-link">
						<button className="linkBtn">
							Delete this comment.
						</button>
					</Link>
					</div>
	   
			   )
			)}
	   </div>
	  }
	  {(!errorMessage && message) &&
	  	<h2 style={{textAlign: "center"}}>{message}</h2>

	  }
	   {errorMessage &&
		 <p style={{textAlign: "center", fontWeight:"bold"}}>
		 	{errorMessage}
		 </p>
		}
   </>
   )
}

export default BlogComment;