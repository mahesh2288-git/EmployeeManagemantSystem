import axios from "axios";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

function EmployeeTable(){

const [employees,setEmployees]=useState([]);

useEffect(()=>{

axios.get("http://localhost:8080/api/employees")
.then(res=>setEmployees(res.data));

},[])

function deleteEmployee(id){

axios.delete("http://localhost:8080/api/employees/"+id)
.then(()=>window.location.reload())

}

return(

<div className="container mt-4">

<h2>Employees</h2>

<table className="table table-striped">

<thead>

<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Department</th>
<th>Salary</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{employees.map(emp=>(

<tr key={emp.id}>

<td>{emp.id}</td>
<td>{emp.name}</td>
<td>{emp.email}</td>
<td>{emp.department}</td>
<td>{emp.salary}</td>

<td>

<Link
to={`/update/${emp.id}`}
className="btn btn-primary m-1"
>
Edit
</Link>

<button
className="btn btn-danger"
onClick={()=>deleteEmployee(emp.id)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default EmployeeTable;