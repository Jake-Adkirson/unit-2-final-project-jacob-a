package com.example.demo.dto;

public class UserDTO {

    private String name;

    private String email;

    //TODO: Add secure handling for passwords
    private String password;

    private String watercraft;

    private String location;

    public UserDTO(String name, String email, String password, String watercraft, String location) {
        this.name = name;
        this.email = email;
        this.password = password;
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
