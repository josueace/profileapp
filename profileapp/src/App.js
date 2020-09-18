import React,{Component} from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import profileHome from './components/ProfileHome';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import service from './api/service';
import {Link} from 'react-router-dom';
import ProtectedRoute from './components/protected-route';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state ={
    loggedInUser:null
  };

 
}

fetchUser(){
  if(this.state.loggedInUser === null){
    service.loggedin()
    .then(response =>{
      this.setState({
        loggedInUser:response
      })
      
    })
    .catch(err =>{
      this.setState({
        loggedInUser:false
      })
    })
  }
}

getTheUser = (userObj) =>{
  this.setState({
    loggedInUser:userObj
  })
  console.log(this.state.loggedInUser);
}


render(){
  this.fetchUser()

  console.log(this.state.loggedInUser);

  if(!this.state.loggedInUser){
  return (

    <div className="App">
    <Switch>
      
      <Route path="/signup" component={Signup}/>
     
  <Route path="/login" render={() => <Login getUser={this.getTheUser}/>} />
      <Route  path="/profile" render={() => <Profile User={this.state.loggedInUser}/>}/>
      <Route path="/" component={profileHome}/>
    </Switch>
    </div>
  );}else{
    return(
      <div className="App">
        <Link to='/profile'><button>profile</button></Link>
       <Route  path="/" render={() => <Profile User={this.state.loggedInUser}/>}/>
      </div>
    )
  }
}
}

export default App;
