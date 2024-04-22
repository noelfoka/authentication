import { useState } from "react";
import "../App.css";
import  Axios from "axios";

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
}
const Signup = () => {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username: </label>
        <input 
          type="text"  
          id="username" 
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
       />

        <label htmlFor="email">Email: </label>
        <input 
          type="text" id="email" 
          autoComplete="off" 
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          id="password" 
          autoComplete="off" 
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
