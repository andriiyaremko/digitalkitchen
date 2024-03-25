package com.example.digitalkitchenapplication.controller;

import com.example.digitalkitchenapplication.data.model.Person;
import com.example.digitalkitchenapplication.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/users")
@RequiredArgsConstructor
public class PersonController {
    private final PersonService personService;

    @GetMapping
    public Iterable<Person> getUsers(){
        return personService.findAll();
    }

    @PostMapping
    public Person create(@RequestBody Person person) {
        return personService.save(person);
    }

    @PostMapping("/login")
    public Person findByEmail(@RequestBody Person person ) throws Exception {
        return personService.authorizeUser(person.getEmail(), person.getPassword()) ;
    }

    @PutMapping
    public Person update(@RequestBody Person person) {
        return personService.save(person);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id){
        personService.deleteById(id);
    }
}
