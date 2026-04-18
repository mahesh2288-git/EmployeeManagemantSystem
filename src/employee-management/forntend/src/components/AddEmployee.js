import axios from "axios";
import {useState} from "react";

function AddEmployee(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [department,setDepartment]=useState("");
const [salary,setSalary]=useState("");

function saveEmployee(){

axios.post("http://localhost:8080/api/employees",{
name,email,department,salary
})

alert("Employee Added")

}

return(

<div className="container mt-4">

<h2>Add Employee</h2>

<input
className="form-control m-2"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control m-2"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="form-control m-2"
placeholder="Department"
onChange={(e)=>setDepartment(e.target.value)}
/>

<input
className="form-control m-2"
placeholder="Salary"
onChange={(e)=>setSalary(e.target.value)}
/>

<button
className="btn btn-success"
onClick={saveEmployee}
>
Save
</button>

</div>

)

}

export default AddEmployee;