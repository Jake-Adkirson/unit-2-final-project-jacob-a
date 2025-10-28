package com.example.demo.controllers;

import com.example.demo.models.Event;
import com.example.demo.models.User;
import com.example.demo.repositories.EventRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
    public ResponseEntity<?> getAllEvents() {
        List<Event> allEvents = eventRepository.findAll();
        return new ResponseEntity<>(allEvents, HttpStatus.OK);
    }

    @GetMapping(value="/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getArtworkById(@PathVariable Long eventId) throws Exception {
        Event event = eventRepository.findById(eventId).orElse(null);
        if (event == null) {
          throw new Exception("Event not found");
        }
        return new ResponseEntity<>(event, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        eventRepository.save(event);
        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }

    @PostMapping("/{eventId}/attendees/{userId}")
    public ResponseEntity<?> addAttendee(@PathVariable Long id, @PathVariable Long userId) {
        Optional<Event> eventOptional = eventRepository.findById(id);
        Optional<User> userOptional = userRepository.findById(userId);
        if (eventOptional.isEmpty() || userOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Event event = eventOptional.get();
        event.addAttendee(userOptional.get());
        eventRepository.save(event);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long id) throws Exception {
        Event event = eventRepository.findById(id).orElse(null);
        if (event == null) {
            throw new Exception("Event not found");
        } else {
            eventRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
