package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Person;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface PersonRepository extends CrudRepository<Person, UUID> {

    Optional<Person> findByEmail(String email);

    Boolean existsByEmailAndPassword(String email, String password);
}