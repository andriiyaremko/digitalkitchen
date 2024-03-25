package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Category;
import com.example.digitalkitchenapplication.data.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryServiceImpl implements CategoryService{

    private final CategoryRepository categoryRepository;

    public Iterable<Category> findAll(){
        return categoryRepository.findAll();
    }

    public Category save(Category category){
        return categoryRepository.save(category);
    }

    public void deleteById(UUID id){
        categoryRepository.deleteById(id);
    }
}
