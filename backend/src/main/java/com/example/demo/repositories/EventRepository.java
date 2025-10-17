package com.example.demo.repositories;

import com.example.demo.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public class EventRepository extends JpaRepository<Event, Long> {

}
