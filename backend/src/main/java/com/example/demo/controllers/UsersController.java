package com.example.demo.controllers;

import com.example.demo.dto.UsersDTO;
import com.example.demo.models.Users;
import com.example.demo.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        List<Users> users = usersRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUserById(@PathVariable Integer id) throws Exception {
        Users users = usersRepository.findById(id).orElse(null);
        if (users == null) {
            throw new Exception("User not found");
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/current")
    public ResponseEntity<UsersDTO> getCurrentUser(@AuthenticationPrincipal User principal) {
        if (principal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        Users user = usersRepository.findByEmail(principal.getUsername()).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        UsersDTO dto = new UsersDTO();
        dto.setEmail(user.getEmail());
        dto.setName(user.getName());
        dto.setAge(user.getAge());
        dto.setLocation(user.getLocation());
        dto.setWatercraft(user.getWatercraft());

        return ResponseEntity.ok(dto);
    }

    @PutMapping("/add/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable Integer id, @RequestBody Users usersDetails) {
        return usersRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setEmail(usersDetails.getEmail());
                    existingUser.setName(usersDetails.getName());
                    existingUser.setPassword(usersDetails.getPassword());
                    existingUser.setLocation(usersDetails.getLocation());
                    existingUser.setWatercraft(usersDetails.getWatercraft());

                    Users updatedUsers = usersRepository.save(existingUser);
                    return ResponseEntity.ok(updatedUsers);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) throws Exception {
        Users users = usersRepository.findById(id).orElse(null);
        if (users == null) {
            throw new Exception("User not found");
        }
        usersRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
