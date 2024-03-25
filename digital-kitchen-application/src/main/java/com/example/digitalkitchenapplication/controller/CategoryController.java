package com.example.digitalkitchenapplication.controller;

import com.example.digitalkitchenapplication.data.model.Category;
import com.example.digitalkitchenapplication.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public Iterable<Category> getCategories(){
        return categoryService.findAll();
    }

    @PostMapping
    public Category create(@RequestBody Category category) {
        return categoryService.save(category);
    }

    @PutMapping
    public Category update(@RequestBody Category category) {
        return categoryService.save(category);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id){
        categoryService.deleteById(id);
    }
}
