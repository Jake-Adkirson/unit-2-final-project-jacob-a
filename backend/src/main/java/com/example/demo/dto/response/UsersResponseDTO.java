package com.example.demo.dto.response;

import java.sql.Timestamp;

public class UsersResponseDTO {

    private String email;
    private String name;
    private int age;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String watercraft;
    private String location;

    public UsersResponseDTO() {
    }

    public UsersResponseDTO(String email, String name, int age, Timestamp createdAt, Timestamp updatedAt, String watercraft, String location) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.watercraft = watercraft;
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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
