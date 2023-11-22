import React, { useEffect, useState } from 'react';
import './App.css';

function Login () {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <body className="App">
    <div className="navbutons">
    <a class='navbut' href='App.jsx'>Pagrindinis</a>
    <a class='navbut' href='akcijos.jsx'>Akcijos</a>
    <a class='navbut' href='#home'>Išsaugoti</a>
    <input class='navsearchas' type='text' placeholder='Produktų Paieška...'></input>
    <a class='searchbut'>Ieškoti</a>
    <a class='loginbut' href='login.jsx'>Prisijungti</a>
    </div>
    <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

    <label>
    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</input>
    </label>

    <p>By creating an account you agree to our</p><a href="#" style="color:dodgerblue"></a><p>Terms and Privacy.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
    </body>
  );
}
export default Login;