import React, {useState} from "react";

const DeleteBlog = ({ blogId }) =>{

	const [errorMessage, setErrorMessage] = useState('');

	const handleDelete = () => {

		fetch(`https://hidden-eyrie-46633.herokuapp.com/admin/blogs/${blogId}/delete`, {
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

	
	return(
	<>	
		<h1 style={{textAlign: "center"}}>Are you sure you want to delete this blog?</h1>
		
		<button onClick={handleDelete} className="linkBtn">Yes,delete</button>

		{errorMessage &&
		 <p style={{textAlign: "center", fontWeight:"bold"}}>
		 	{errorMessage}
		 </p>
		}

   </>
   )
}

export default DeleteBlog;