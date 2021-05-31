import React, {useState, useEffect} from "react";

const EditBlog = ({ blogId }) =>{

	const [blogDetail, setBlogDetail] = useState({});
	const [errorMessage, setErrorMessage] = useState('');
	const [message, setMessage] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let formdata = new FormData(document.getElementById('edit_blog_form'));
		fetch(`http://localhost:5000/admin/blogs/${blogId}`, {
			  method: "PUT",
			  mode : 'cors',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			    Authorization:JSON.parse(localStorage.getItem('token'))
			  },
			  //serialize the JSON body
			  body: JSON.stringify(Object.fromEntries(formdata)) }) 
		.then(response => {
				if(!response.ok) {
				        throw new Error("ERROR: HTTP status " + response.status);
			    }
				return response.json();
		})
		.then(data => setMessage(data.message))
		.catch(err => setMessage(err.message));
	}

	useEffect(() => {
		fetch(`http://localhost:5000/admin/blogs/${blogId}`, {
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
  		.then(data => setBlogDetail(data))
  		.catch(err => setErrorMessage(err.message))
  		//eslint-disable-next-line
	}, [])

	return(
	<>
		<form id="edit_blog_form"  onSubmit={handleFormSubmit} className="form_div">
        	<label htmlFor="title">Title:</label>
        	<input type="text" id="title" name="title" defaultValue={blogDetail.title} required/>
        	<label htmlFor="text">Text:</label>
        	<input type="text" id="text" name="text" minLength="10" defaultValue={blogDetail.text} required/>
        	<div>IsPublished:<br />
				<input type="radio" id="true" name="ispublished" value="true" defaultChecked={blogDetail.isPublished}/>
				<label htmlFor="true">True</label><br />
				<input type="radio" id="false" name="ispublished" value="false" defaultChecked={!blogDetail.isPublished}/>
				<label htmlFor="false">False</label><br />
			</div>
			<button type="submit" className="linkBtn">Submit</button>
        </form>
        <p className="message-post">{message}</p>
		{errorMessage &&
		 <p style={{textAlign: "center", fontWeight:"bold"}}>
		 	{errorMessage}
		 </p>
		}
   	</>
   )
}

export default EditBlog;