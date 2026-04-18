import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/employees" element={<EmployeeTable/>}/>
<Route path="/add" element={<AddEmployee/>}/>
<Route path="/update/:id" element={<UpdateEmployee/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;