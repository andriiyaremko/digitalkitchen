package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Ingredient;
import com.example.digitalkitchenapplication.data.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class IngredientServiceImpl implements IngredientService{

    private final IngredientRepository ingredientRepository;

    @Override
    public Optional<Iterable<Ingredient>> findAllByRecipeId(UUID id) {
        return ingredientRepository.findAllByRecipeId(id);
    }
}
