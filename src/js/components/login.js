import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  render () {
    return(
      <div className="login">
        <span>E-Mail:</span>
          <input className="username" placeholder="E-Mail..."></input>
        <span>Password:</span>
          <input type="password" className="username" placeholder="Password..."></input>
        <button value="Submit">Submit</button>
        <br />
        <Link to="/dashboard">Testing Dashboard by pass</Link>
      </div>
    )
  }
}

export default Login;
