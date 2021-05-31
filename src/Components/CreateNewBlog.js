import React, {useState} from "react";

const CreateNewBlog = () =>{

	const [errorMessage, setErrorMessage] = useState('');
	const [message, setMessage] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let formdata = new FormData(document.getElementById('create_blog_form'));
		console.log({formdata});
		fetch("https://hidden-eyrie-46633.herokuapp.com/admin/blogs/new", {
			  method: "POST",
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
		.catch(err => setErrorMessage(err.message));
	}

	return(
	<>
		<form id="create_blog_form"  onSubmit={handleFormSubmit} className="form_div">
        	<label htmlFor="title">Title:</label>
        	<input type="text" id="title" name="title" required/>
        	<label htmlFor="text">Text:</label>
        	<input type="text" id="text" name="text" minLength="10" required/>
        	<div>IsPublished:<br />
				<input type="radio" id="true" name="ispublished" value="true"/>
				<label htmlFor="true">True</label><br />
				<input type="radio" id="false" name="ispublished" value="false" defaultChecked="true"/>
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

export default CreateNewBlog;