package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ResourceRepo extends JpaRepository<Resource, Long> {
    List<Resource> findByCourseId(long courseId);
}
