package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.CustomPage;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the CustomPage entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CustomPageRepository extends JpaRepository<CustomPage, Long> {
}
