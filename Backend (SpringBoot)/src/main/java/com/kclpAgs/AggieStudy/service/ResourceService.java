package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.Resource;
import com.kclpAgs.AggieStudy.repo.ResourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourceService {
    @Autowired
    private ResourceRepo resourceRepository;

    public List<Resource> getAllResources(){
        return resourceRepository.findAll();
    }

    public Resource getResourceById(Long id){
        return resourceRepository.findById(id).orElse(null);
    }
    public Resource saveResource(Resource resource) {
        return resourceRepository.save(resource);
    }

    public void deleteResource(Long id) {
        resourceRepository.deleteById(id);
    }
}
