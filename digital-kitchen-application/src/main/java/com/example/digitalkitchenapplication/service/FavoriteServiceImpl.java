package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Favorite;
import com.example.digitalkitchenapplication.data.repository.FavoriteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class FavoriteServiceImpl implements FavoriteService{
    private final FavoriteRepository favoriteRepository;

    public Favorite create(Favorite entity){
        return favoriteRepository.save(entity);
    }

    public void delete(UUID id){
        favoriteRepository.deleteById(id);
    }

    public List<Favorite> findByPersonId(UUID personId){
        return favoriteRepository.findAllByPersonId(personId).orElse(Collections.emptyList());
    }
}
