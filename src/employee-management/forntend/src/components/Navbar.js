import {Link} from "react-router-dom";

function Navbar(){

return(

<nav className="navbar navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand">EMS</Link>

<div>

<Link to="/dashboard" className="btn btn-light m-1">
Dashboard
</Link>

<Link to="/employees" className="btn btn-light m-1">
Employees
</Link>

<Link to="/add" className="btn btn-success m-1">
Add Employee
</Link>

</div>

</div>

</nav>

)

}

export default Navbar;