package mahesh.employee_management.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import mahesh.employee_management.entity.Employee;
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}