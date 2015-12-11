import React from 'react';
import  jQuery from 'jquery';

class User{
  constructor() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_create = null;
    this.listeners = [];
  }

  // Create a function that takes the values given to us from the 'Register',
  // component and make an AJAX request. The AJAX request should specify the
  // POST method so that is known we are asking for a token in response.
  register(data){
    let url = 'https://silent-auctioner.herokuapp.com/users'
    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };


    //Shows use if we where able to log in
    jQuery.ajax(options).then(response =>{
      console.log(response);
    });
  };

  //This section is where we are trying to authenicate our token so that we
  //Can log in
  login(data, done) {
    let url = 'http://silent-auctioner.herokuapp.com/oauth/token';
    data.grant_type = 'password';

    let options = {
      url: url,
      method: 'POST',
      data: data
    };

    jQuery.ajax(options).then(response =>{
      let {access_token, refresh_token, expires_in, created_at} = response;
      console.log(response)
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = expires_in;
      this.token_created = created_at;

      //Need to store the token in a cookie

      //Shows use if we where able to log in
      done(null,response);
    }).fail(error => {
      done(error);
    });
  };
}

export default new User();
