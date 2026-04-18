import axios from "axios";
import {useState} from "react";

function Login(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

function login(){

axios.post("http://localhost:8080/auth/login",{
username,password
})
.then(res=>alert(res.data))

}

return(

<div className="container mt-5">

<h2>Login</h2>

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
className="btn btn-primary"
onClick={login}
>
Login
</button>

</div>

)

}

export default Login;