package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.Answer;
import com.kclpAgs.AggieStudy.model.Question;
import com.kclpAgs.AggieStudy.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepo questionRepository;

    public List<Question> getAllQuestions(){
        return questionRepository.findAll();
    }
    public Question getQuestionById(Long id){
        return questionRepository.findById(id).orElse(null);
    }
    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }
    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }
    public List<Answer> getAnswersByQuestion(Long questionId){
        Question question = questionRepository.findById(questionId).orElse(null);
        return question.getAnswers();
    }
}
