import React, {useState} from "react";

const LogIn = () => {

	const [errorMessage, setErrorMessage] = useState('');
	const [message, setMessage] = useState('');

	if(JSON.parse(localStorage.getItem('token'))) {
			window.location.href = "/blogs";
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let formdata = new FormData(document.getElementById('login_form'));
		fetch("http://localhost:5000/beAdmin/", {
			  method: "POST",
			  mode : 'cors',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			  },
			  //serialize the JSON body
			  body: JSON.stringify(Object.fromEntries(formdata)) }) 
		.then(response => {
				if(!response.ok) {
				        throw new Error("ERROR: HTTP status " + response.status);
			    }
				return response.json();
		})
		.then(data => {
					setMessage(data.message); 
					if (data.token) {
						localStorage.setItem('token', JSON.stringify(data.token));
					}
				})
		.catch(err => setErrorMessage(err.message));
	}

	return(
	<>
		<form id="login_form"  onSubmit={handleFormSubmit} className="form_div">
        	<label htmlFor="Adminname">Adminname:</label>
        	<input type="text" id="Adminname" name="Adminname" required/>
        	<label htmlFor="password">Password:</label>
        	<input type="password" id="password" name="password" required/>
			<button type="submit" className="linkBtn">LOGIN</button>
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

export default LogIn;