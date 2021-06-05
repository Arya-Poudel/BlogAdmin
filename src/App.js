import './App.css';
import React from "react";
import LogIn from './Components/LogIn';
import BlogList from './Components/BlogList';
import CreateNewBlog from './Components/CreateNewBlog';
import BlogDetail from './Components/BlogDetail';
import BlogComments from './Components/BlogComments';
import DeleteBlogComment from './Components/DeleteBlogComment';
import DeleteBlog from './Components/DeleteBlog';
import EditBlog from './Components/EditBlog';
import { HashRouter as Router, Switch, Route} from "react-router-dom";



function App() {


  return (
    <div className="App">
    
        <Router basename="/">
	       <Switch>
	          <Route exact path="/" component={LogIn} />
               <Route exact path="/blogs" component={BlogList} />
               <Route exact path="/blogs/new" component={CreateNewBlog} />     	
	          <Route exact path="/blogs/:id" 
                  render = {routeProps => (
                    <BlogDetail blogId={routeProps.match.params.id}  />
                  )}
          	   /> 
          	   <Route exact path="/blogs/:id/comments"
                 render = {routeProps => (
                      <BlogComments blogId={routeProps.match.params.id} />
                  )} 
	           />
                

	            <Route exact path="/blogs/:id/edit"
                 render = {routeProps => (
                      <EditBlog blogId={routeProps.match.params.id} />
                  )} 
	           />
	            <Route exact path="/blogs/:id/delete"
                 render = {routeProps => (
                      <DeleteBlog blogId={routeProps.match.params.id} />
                  )} 
	           />

	            <Route exact path="/blogs/comments/:id/delete"
                 render = {routeProps => (
                      <DeleteBlogComment commentId={routeProps.match.params.id} />
                  )} 
	           />


	       </Switch>
	    </Router>
    </div>
  );
}

export default App;
