package com.example.demo.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.sql.Timestamp;


public class UsersRequestDTO {

    @NotBlank
    @Size(min = 3, message = "Name must be at least 3 characters long")
    private String name;

    @NotNull(message = "Email is required")
    @Email(message = "Provide email address")
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 5, message = "Password must be at least 5 characters")
    private String password;

    private int age;
    private String watercraft;
    private String location;

    public UsersRequestDTO(){
    }

    public UsersRequestDTO(String name, String email, String password, int age, String watercraft, String location) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.watercraft = watercraft;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getWatercraft() {
        return watercraft;
    }

    public void setWatercraft(String watercraft) {
        this.watercraft = watercraft;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
