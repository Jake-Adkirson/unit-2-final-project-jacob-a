package com.example.demo.controllers;

import com.example.demo.models.Event;
import com.example.demo.models.Users;
import com.example.demo.repositories.EventRepository;
import com.example.demo.repositories.UsersRepository;
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
    private UsersRepository usersRepository;

    @GetMapping
    public ResponseEntity<?> getAllEvents() {
        List<Event> allEvents = eventRepository.findAll();
        return new ResponseEntity<>(allEvents, HttpStatus.OK);
    }

    @GetMapping(value="{id}", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getArtworkById(@PathVariable Integer id) throws Exception {
        Event event = eventRepository.findById(id).orElse(null);
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

    @PostMapping("/{id}/attendees/{userId}")
    public ResponseEntity<?> addAttendee(@PathVariable Integer id, @PathVariable Integer userId) {
        Optional<Event> eventOptional = eventRepository.findById(id);
        Optional<Users> userOptional = usersRepository.findById(userId);
        if (eventOptional.isEmpty() || userOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Event event = eventOptional.get();
        event.addAttendee(userOptional.get());
        eventRepository.save(event);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Integer id) throws Exception {
        Event event = eventRepository.findById(id).orElse(null);
        if (event == null) {
            throw new Exception("Event not found");
        } else {
            eventRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
