package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface CourseRepo extends JpaRepository<Course, Long> {
    List<Course> findByNameContaining(String query);

    @Query("SELECT c FROM Course c WHERE LOWER(c.name) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Course> findByNameContainingIgnoreCase(String query);
}
