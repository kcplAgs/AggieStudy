package com.clpAgs.AggieStudy.repo;

import com.clpAgs.AggieStudy.model.TamuClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TamuClassRepo extends JpaRepository<TamuClass, Long> {
}
