package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    //TODO: Add secure handling for passwords
    private String password;

    @Enumerated(EnumType.STRING)
    private Watercraft prefferedWatercraft;

    private String location;

    public User(){

    }

    public Long getId(){
        return id;
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

    public Watercraft getPrefferedWatercraft() {
        return prefferedWatercraft;
    }

    public void setPrefferedWatercraft(Watercraft prefferedWatercraft) {
        this.prefferedWatercraft = prefferedWatercraft;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
