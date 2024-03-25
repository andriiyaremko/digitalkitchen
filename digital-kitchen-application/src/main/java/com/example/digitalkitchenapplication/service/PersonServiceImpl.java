package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Person;
import com.example.digitalkitchenapplication.data.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class PersonServiceImpl implements PersonService {
    private final PersonRepository personRepository;
    public Iterable<Person> findAll(){
        return personRepository.findAll();
    }

    public Person save(Person person){
        return personRepository.save(person);
    }

    public void deleteById(UUID id){
        personRepository.deleteById(id);
    }

    public Person authorizeUser(String email, String password) throws Exception {
        if(personRepository.existsByEmailAndPassword(email, password)) {
            return personRepository.findByEmail(email).orElseThrow(() -> new Exception("User not found "));
        }else {throw new Exception("User not found ");}
    }
}
