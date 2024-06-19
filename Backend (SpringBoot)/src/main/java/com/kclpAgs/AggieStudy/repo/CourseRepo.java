package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CourseRepo extends JpaRepository<Course, String> {
}
