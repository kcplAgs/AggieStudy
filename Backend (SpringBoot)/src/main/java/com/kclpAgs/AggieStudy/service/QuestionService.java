package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.Link;
import com.kclpAgs.AggieStudy.repo.LinkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private LinkRepo questionRepository;

    public List<Link> getAllQuestions(){
        return questionRepository.findAll();
    }
    public Link getQuestionById(String id){
        return questionRepository.findById(id).orElse(null);
    }
    public Link saveQuestion(Link link) {
        return questionRepository.save(link);
    }
    public void deleteQuestion(String id) {
        questionRepository.deleteById(id);
    }
}
