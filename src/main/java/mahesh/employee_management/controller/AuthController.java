package mahesh.employee_management.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import mahesh.employee_management.entity.User;
import mahesh.employee_management.repository.UserRepository;


@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    UserRepository repo;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return repo.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        User dbUser = repo.findByUsername(user.getUsername());

        if (dbUser != null &&
                dbUser.getPassword().equals(user.getPassword())) {

            return "Login Successful";
        }

        return "Invalid Credentials";
    }
}