import axios from "axios";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

function UpdateEmployee(){

const {id}=useParams();

const [employee,setEmployee]=useState({});

useEffect(()=>{

axios.get("http://localhost:8080/api/employees")
.then(res=>{

const emp=res.data.find(e=>e.id==id)

setEmployee(emp)

})

},[])

function updateEmployee(){

axios.put(
"http://localhost:8080/api/employees/"+id,
employee
)

alert("Employee Updated")

}

return(

<div className="container">

<h2>Update Employee</h2>

<input
className="form-control m-2"
value={employee.name||""}
onChange={(e)=>
setEmployee({...employee,name:e.target.value})
}
/>

<input
className="form-control m-2"
value={employee.email||""}
onChange={(e)=>
setEmployee({...employee,email:e.target.value})
}
/>

<input
className="form-control m-2"
value={employee.department||""}
onChange={(e)=>
setEmployee({...employee,department:e.target.value})
}
/>

<input
className="form-control m-2"
value={employee.salary||""}
onChange={(e)=>
setEmployee({...employee,salary:e.target.value})
}
/>

<button
className="btn btn-primary"
onClick={updateEmployee}
>
Update
</button>

</div>

)

}

export default UpdateEmployee;