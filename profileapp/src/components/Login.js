import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import service from '../api/service';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    
constructor(props){
    super(props);
    this.state={
        username:'',
        password:''
        
    }
}

handleFormSubmit=()=> {
service.login(this.state)
.then(res =>{
    
    this.props.getUser(res.data);//call parent app.js gettheuser to set logged usewr
    this.props.history.push("/profile");
  
});
}

handleChange(e){
const {name,value}=e.target;
this.setState({[name]:value});
console.log(this.state[[name]]);
}

 render(){
    return (
        
    <div className="right"> 

<div className="form">
    <h1>Login</h1>
  
<label>
    username:
</label>
<input type='text' name="username" onChange={e=>this.handleChange(e)} value={this.state.username}/>
<label>
    password:
</label>
<input type='text' name="password" onChange={e=>this.handleChange(e)} value={this.state.password}/>

    
</div>
<div>
    <div className="intro">
            <h1>Hello!!</h1>
            <p>Welcome to IronProfile!
            </p>
        </div>
    <div className="btnGroup">    
    <p>If you signup, you agree with all our<br /> terms and conditions where we can <br /> do whatever we want with the data!</p>
     <button onClick={this.handleFormSubmit} className="greenBtn">Login</button>
     </div>

     </div>
  
  
    </div>

  );
    }
}

export default withRouter(Login);