import React,{Component} from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import profileHome from './components/Home/ProfileHome';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import service from './api/service';
import Navbar from './components/navbar/Navbar';
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom';
import ProtectedRoute from './components/protected-route';

import './App.css';

class App extends Component {
constructor(){
  super();
  this.state ={
    loggedInUser:null
  };

 
}


fetchUser(){

  if(this.state.loggedInUser === null){
    service.loggedin()
    .then(response =>{
      console.log(response +"heyyyyyyyyyyyybob");
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
 
  console.log('paso1'+this.state.loggedInUser);
}


render(){

  
  this.fetchUser()

  console.log(this.state.loggedInUser);
  const { history } = this.props;

  if(!this.state.loggedInUser){
  return (

    <div className="App">
      <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
      
    <Switch>
    
      <Route path="/signup" render={() => <Signup getUser={this.getTheUser}/>} />
      <Route path="/login" render={() => <Login redirect={this.redirectToHome}getUser={this.getTheUser}/>} />
  
      <Route path="/" component={profileHome}/>
    </Switch>
    </div>
  );}else{
    return(
      <div className="App">
        <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
       
        <Switch>
     
       <Route  path="/profile" render={() => <Profile User={this.state.loggedInUser}/>}/>
       </Switch>
      </div>
    )
  }
}
}

export default App;
