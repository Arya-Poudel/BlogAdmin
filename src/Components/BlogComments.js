import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const BlogComment = ({ blogId }) =>{

	const [blogComments, setBlogComments] = useState([]);
	const [blogTitle, setBlogTitle] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

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
  					setBlogComments(data) 
  					setBlogTitle(data[0].writtenIn.title)
  				})
  		.catch(err => setErrorMessage(err.message))
  		//eslint-disable-next-line
	}, [])

	return(
	<>
	{!errorMessage && 
		<div className="blogcomments ">
			<h1 style={{textAlign: "center"}}>Comments-{blogTitle}</h1>
	        {blogComments.map(comment => (
					<div key={comment._id} className="blogcomment"> 
					<h2>{comment.name}</h2>
						<p>{comment.comment}</p>
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
	   {errorMessage &&
		 <p style={{textAlign: "center", fontWeight:"bold"}}>
		 	{errorMessage}
		 </p>
		}
   </>
   )
}

export default BlogComment;