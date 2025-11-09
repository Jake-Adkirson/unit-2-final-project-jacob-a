package com.example.demo.dto;

import java.sql.Timestamp;

public class UsersDTO {

    //takes in Id since value is needed for front-end operations
    private Long id;
    private String name;
    private String email;
    private int age;
    private String password;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String watercraft;
    private String location;

    public UsersDTO() {
    }

    public UsersDTO(Long id, String name, String email, int age, String password, Timestamp createdAt, Timestamp updatedAt, String watercraft, String location) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.watercraft = watercraft;
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
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
