package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ResourceRepo extends JpaRepository<Resource, Long> {
}
