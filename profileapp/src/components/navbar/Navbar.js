// components/navbar/Navbar.js

import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../api/service';
import CoolButton from "../coolbutton/CoolButton";
import './Navbar.css'
class Navbar extends Component {

    constructor(props){
      super(props)
        this.state ={ loggedInUser:null};
        this.service= AuthService;
    }


componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }


    render(){
        if(this.state.loggedInUser){
            return(
              <nav className="nav-style">
                <ul>
                  <li>Welcome, {this.state.loggedInUser.username}</li>
                  <li>
                    <Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link>
                  </li>
                  <li>
              <Link to='/'>
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
                </ul>
              </nav>
            )
          } else {
            const element=(
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://res.cloudinary.com/josueace/image/upload/v1601944563/clipart2240136_wupwrh.png" width="50" height="38"/>
                  </a>
              
                  <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <a class="navbar-item">
                      Home
                    </a>
              
              
                    
                  </div>
              
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        
                        
                      <Link to='/login' style={{ textDecoration: 'none' }}>  <CoolButton className="button is-rounded my-class  is-medium" val="Sign in"/> </Link>
                        
                      
                      <Link to='/signup' style={{ textDecoration: 'none' }}>  <CoolButton className="button is-medium is-success" val="Sign up"/> </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
                      
                  );
            return (
              <div>
             
              {element}
                
            
              </div>
            )
          }
    }
}

export default Navbar;