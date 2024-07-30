package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.OpenQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;


@RepositoryRestResource
public interface OpenQuestionRepo extends JpaRepository<OpenQuestion, UUID> {
}
