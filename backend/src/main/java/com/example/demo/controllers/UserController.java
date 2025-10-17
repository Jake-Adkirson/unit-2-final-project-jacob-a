package com.example.demo.controllers;

import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<User> create(User user) {
        //TODO: Add validation and hasing for password
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @PutMapping
    public ResponseEntity<User> update(@RequestBody User user) {
        if (!userRepository.existsById(user.getId())) {
            return ResponseEntity.notFound().build();
        }

        @DeleteMapping("/{id}")
        public void deleteUser(@PathVariable Long id){
            userRepository.deleteById(id);
        }
}
