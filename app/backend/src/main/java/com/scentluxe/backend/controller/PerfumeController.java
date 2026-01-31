package com.scentluxe.backend.controller;

import com.scentluxe.backend.model.Perfume;
import com.scentluxe.backend.repository.PerfumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perfumes")
@CrossOrigin(origins = "*") // Allow React Frontend to access this
public class PerfumeController {

    @Autowired
    private PerfumeRepository repository;

    @GetMapping
    public List<Perfume> getAllPerfumes() {
        return repository.findAll();
    }

    @PostMapping
    public Perfume addPerfume(@RequestBody Perfume perfume) {
        return repository.save(perfume);
    }
}