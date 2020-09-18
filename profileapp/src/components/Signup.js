import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import service from '../api/service';

class Signup extends Component {
constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        campus:'',
        course:''
    }
}

handleFormSubmit=()=> {
service.signup(this.state)
.then(res =>{

    console.log(res+"hollybobbbbbbb");
    this.setState({username:'',password:'',campus:'',course:""});
    this.props.getUser(res);
    console.log("done");

}
    
    );
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
    <h1>Sign up</h1>
  
<label>
    username:
</label>
<input type='text' name="username" onChange={e=>this.handleChange(e)} value={this.state.username}/>
<label>
    password:
</label>
<input type='text' name="password" onChange={e=>this.handleChange(e)} value={this.state.password}/>
<label>
    campus:
</label>
<input type='text' name="campus" onChange={e=>this.handleChange(e)} value={this.state.campus}/>
<label>
    course:
</label>
<input type='text' name="course" onChange={e=>this.handleChange(e)} value={this.state.course}/>
    
</div>
<div>
    <div className="intro">
            <h1>Hello!!</h1>
            <p>Welcome to IronProfile!
            </p>
        </div>
    <div className="btnGroup">    
    <p>If you signup, you agree with all our<br /> terms and conditions where we can <br /> do whatever we want with the data!</p>
     <button onClick={this.handleFormSubmit} className="greenBtn">Create the Account</button>
     </div>

     </div>
  
  
    </div>

  );
    }
}

export default Signup;