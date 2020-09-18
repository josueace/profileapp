// api/service.js

import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api',
  // withCredentials: true // => you might need this when having the users in the app 
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

export default {
  service,

  handleUpload (theFile) {
    // console.log('file in service: ', theFile)
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  signup (newThing) {
    // console.log('new thing is: ', newThing)
    return service.post('/signup',newThing)
    .then(res => res.data)
    .catch(errorHandler);
  },

  login (theUser) {
    return this.service.post('/login', theUser)
    .then(response => response)
    .catch(errorHandler);
  },

  loggedin  ()  {
    return this.service.get('/loggedin')
    .then(response => response)
  },

  logout  () {
    return this.service.post('/logout', {})
    .then(response => response.data)
  },
  edit (newProf){
    return  this.service.put('/edit',newProf)
    .then(res => res)
  }

}