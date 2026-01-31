package com.scentluxe.backend.repository;
import com.scentluxe.backend.model.Perfume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerfumeRepository extends JpaRepository<Perfume, Long> {
}