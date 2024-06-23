package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface LinkRepo extends JpaRepository<Link, String> {
    List<Link> findByCourseId(String courseId);
}
