package mahesh.employee_management.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import mahesh.employee_management.entity.Employee;
import mahesh.employee_management.repository.EmployeeRepository;
@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository repository;
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }
    public Employee addEmployee(Employee emp) {
        return repository.save(emp);
    }
    public Employee updateEmployee(Long id, Employee emp) {
        Employee e = repository.findById(id).get();
        e.setName(emp.getName());
        e.setEmail(emp.getEmail());
        e.setDepartment(emp.getDepartment());
        e.setSalary(emp.getSalary());

        return repository.save(e);
    }
    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}