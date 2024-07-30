package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.OpenQuestion;
import com.kclpAgs.AggieStudy.repo.OpenQuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OpenQuestionService {
    @Autowired
    private OpenQuestionRepo openQuestionRepo;

    public List<OpenQuestion> getAllQuestions(){
        return openQuestionRepo.findAll();
    }
    public OpenQuestion getQuestionById(UUID id){
        return openQuestionRepo.findById(id).orElse(null);
    }
    public OpenQuestion saveQuestion(OpenQuestion openQuestion) {
        return openQuestionRepo.save(openQuestion);
    }
    public void deleteQuestion(UUID id) {
        openQuestionRepo.deleteById(id);
    }
    public String getAnswerByQuestion(UUID questionId){
        OpenQuestion openQuestion = openQuestionRepo.findById(questionId).orElse(null);
        return openQuestion.getAnswer();
    }
}
