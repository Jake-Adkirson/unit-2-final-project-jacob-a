package com.example.demo.dto.request;

import java.sql.Timestamp;

public class EventDTO {

    private String name;
    private String location;
    private String date;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    public EventDTO(String name, String location, String date, Timestamp createdAt, Timestamp updatedAt) {
        this.name = name;
        this.location = location;
        this.date = date;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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
}
