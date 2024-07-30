package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.Answer;
import com.kclpAgs.AggieStudy.model.MCQuestion;
import com.kclpAgs.AggieStudy.repo.MCQuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MCQuestionService {
    @Autowired
    private MCQuestionRepo MCQuestionRepository;

    public List<MCQuestion> getAllQuestions(){
        return MCQuestionRepository.findAll();
    }
    public MCQuestion getQuestionById(UUID id){
        return MCQuestionRepository.findById(id).orElse(null);
    }
    public MCQuestion saveQuestion(MCQuestion MCQuestion) {
        return MCQuestionRepository.save(MCQuestion);
    }
    public void deleteQuestion(UUID id) {
        MCQuestionRepository.deleteById(id);
    }
    public List<Answer> getAnswersByQuestion(UUID questionId){
        MCQuestion MCQuestion = MCQuestionRepository.findById(questionId).orElse(null);
        return MCQuestion.getAnswers();
    }
}
