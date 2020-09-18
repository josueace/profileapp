import React from 'react';
import {Link} from 'react-router-dom';

function ProfileHome() {
  return (
    <div className="App">
       <div className="intro">
            <h1>IronProfile</h1>
            <p>Today we will create an app<br/> 
            With authorization, adding<br />
            some cool styles!
            </p>
        </div>
    <div className="btnGroup">    
    <Link to={`/signup`}> <button className="greenBtn">Signup</button></Link>
     <Link to={`/login`}><button className="greenBtn">Login</button></Link>
     </div>
     <Link to={`/profile`}><button>Profile</button></Link>
  
    </div>
  );
}

export default ProfileHome;