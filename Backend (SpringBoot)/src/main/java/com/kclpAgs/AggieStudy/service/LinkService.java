package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.Link;
import com.kclpAgs.AggieStudy.repo.LinkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LinkService {
    @Autowired
    private LinkRepo linkRepository;

    public List<Link> getAllLinks(){
        return linkRepository.findAll();
    }
    public Link getLinkById(String id){
        return linkRepository.findById(id).orElse(null);
    }
    public Link saveLink(Link link) {
        return linkRepository.save(link);
    }
    public void deleteLink(String id) {
        linkRepository.deleteById(id);
    }
    public List<Link> getLinksByCourseId(String courseId){
        return linkRepository.findByCourseId(courseId);
    }

}
