package com.example.demo.controllers;

import com.example.demo.models.Event;
import com.example.demo.models.User;
import com.example.demo.repositories.EventRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event saved = eventRepository.save(event);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/{eventId}/attendees/{userId}")
    public ResponseEntity<?> addAttendee(@PathVariable Long eventId, @PathVariable Long userId) {
        Optional<Event> eventOptional = eventRepository.findById(eventId);
        Optional<User> userOptional = userRepository.findById(userId);
        if (eventOptional.isEmpty() || userOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Event event = eventOptional.get();
        event.addAttendee(userOptional.get());
        eventRepository.save(event);
        return ResponseEntity.ok().build();
    }
}
