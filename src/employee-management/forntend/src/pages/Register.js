import axios from "axios";
import {useState} from "react";

function Register(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

function register(){

axios.post("http://localhost:8080/auth/register",{
username,password
})

alert("User Registered")

}

return(

<div className="container mt-5">

<h2>Register</h2>

<input
className="form-control m-2"
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
className="form-control m-2"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="btn btn-success"
onClick={register}
>
Register
</button>

</div>

)

}

export default Register;