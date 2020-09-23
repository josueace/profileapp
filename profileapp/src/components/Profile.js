import React,{Component} from 'react';
import service from '../api/service';


class Profile extends Component {
constructor(props){
    super(props);
    this.state={
        loggedInUser:props.User,
        imageUrl:""
      
        
    }
}





  handleFileUpload =(e)=>{
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route

    uploadData.append("image", e.target.files[0]);

    service.handleUpload(uploadData)
    .then(response =>{
        
      this.state.loggedInUser.image=response.path;
        this.setState({imageUrl:response.path});
       
        service.edit(this.state.loggedInUser)
        .then(res =>{
            console.log(res);

        })
        .catch(err => err);
        console.log(this.state.loggedInUser);

        
    })

    .catch(err =>{
        console.log("error while upload",err)
    })


}


 render(){

    return (
        
    <div className="right"> 

<div className="formy">
    <h1>Profile</h1>
  
<label>
    username:
</label>
    <h1 className="black"> {this.props.User.username}</h1>
<label>
    campus:
</label>
    <h1 className="black">{this.props.User.campus}</h1>
<label>
    Course
</label>
    <h1 className="black">{this.props.User.course}</h1>
    
</div>
<div>
    <div className="intro">
            <img width={200} height={200} class="img-circle" src={this.state.loggedInUser.image}/>
            <p>Welcome to IronProfile!
            </p>
        </div>
    <div className="btnGroup">    
    <p>If you signup, you agree with all our<br /> terms and conditions where we can <br /> do whatever we want with the data!</p>
    <input type="file" onChange={e => this.handleFileUpload(e)}/>
     </div>

     </div>
  
  
    </div>

  );
    }
}

export default Profile;