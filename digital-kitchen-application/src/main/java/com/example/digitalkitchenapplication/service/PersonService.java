package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Person;

import java.util.UUID;

public interface PersonService {
    Iterable<Person> findAll();

    Person save(Person person);

    void deleteById(UUID id);

    Person authorizeUser(String email, String password) throws Exception;

}
