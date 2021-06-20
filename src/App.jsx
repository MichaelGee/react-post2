import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import UserPosts from "./Pages/UserPost";
import PostsList from "./Pages/PostsList";
import ErrorPage from './Pages/404';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Welcome from './Pages/Welcome';
import Create from './Pages/Create';
import '../src/App.css';



const App = () => {


  return(
   <div className="content">
      <Router> 
      <NavBar />
    <Switch>
      {/* render The Welcome page component */}
      <Route exact path="/">
        < Welcome />
       </Route>
       {/* render home component */}
      <Route exact path="/home">
        < Home />
       </Route>
        {/* render user post component */}
       <Route path="/userposts/:userid">
         <UserPosts />
       </Route>
        {/* render Posts component */}
       <Route exact path="/postList">
        <PostsList />
       </Route>
        {/* render Register component */}
       <Route exact path="/register">
        <Register />
       </Route>
       {/* render Login component */}
       <Route exact path ="/login">
        <Login />
       </Route> 
       <Route exact path ="/userPost">
        <Login />
       </Route> 
        {/* render Error component */}
       <Route exact path='/create'>
        <Create />
       </Route>
       <Route >
        <ErrorPage />
       </Route>
    </Switch>
    </Router>
   </div>
  )
}

export default App;
