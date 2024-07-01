package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Favorite;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface FavoriteService {
    Favorite create(Favorite entity);

    void delete(UUID id);

    List<Favorite> findByPersonId(UUID personId);
}
