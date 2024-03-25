package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CategoryRepository extends CrudRepository<Category, UUID> {

}
