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
constructor(){
  super();
  this.state ={
    loggedInUser:null
  };

 
}


fetchUser(){
  alert("enter fetch");
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

  alert('setting current user')
  this.setState({
    loggedInUser:userObj
  })
  alert(JSON.stringify(this.state.loggedInUser))
  console.log('paso1'+this.state.loggedInUser);
}


render(){

  alert('apps render');
  this.fetchUser()

  console.log(this.state.loggedInUser);
  const { history } = this.props;

  if(!this.state.loggedInUser){
  return (

    <div className="App">
    <Switch>
      
      <Route path="/signup" render={() => <Signup getUser={this.getTheUser}/>} />
      <Route path="/login" render={() => <Login redirect={this.redirectToHome}getUser={this.getTheUser}/>} />
  
      <Route path="/" component={profileHome}/>
    </Switch>
    </div>
  );}else{
    return(
      <div className="App">
    
       <Route  path="/profile" render={() => <Profile User={this.state.loggedInUser}/>}/>
      </div>
    )
  }
}
}

export default App;
