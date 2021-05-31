import React, {useState, useEffect} from "react";

const DeleteBlogComment = ({ commentId }) =>{

	const [comment, setComment] = useState({});
	const [errorMessage, setErrorMessage] = useState('');

	const handleDelete = () => {

		fetch(`https://hidden-eyrie-46633.herokuapp.com/admin/blogs/comments/${commentId}/delete`, {
			mode : 'cors',
			method: 'DELETE',
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
  			window.location.href = "/blogs";
			})
  		.catch(err => setErrorMessage(err.message))
  	}

	useEffect(() => {
		fetch(`http://localhost:5000/admin/blogs/comments/${commentId}/delete`, {
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
  		.then(data => setComment(data))
  		.catch(err => setErrorMessage(err.message))
  		//eslint-disable-next-line
	}, [])

	return(
	<>	
		<h1 style={{textAlign: "center"}}>Are you sure you want to delete this comment?</h1>
		<p>{comment.name}</p>
		<p>{comment.comment}</p>
		<p>{comment.time}</p>

		<button onClick={handleDelete} className="linkBtn">Yes,delete</button>

		{errorMessage &&
		 <p style={{textAlign: "center", fontWeight:"bold"}}>
		 	{errorMessage}
		 </p>
		}

   </>
   )
}

export default DeleteBlogComment;