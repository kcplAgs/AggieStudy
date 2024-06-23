import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/exams';

export const getQuestionsByExamId = (examId) => {
    return axios.get(`${API_BASE_URL}/questions/${examId}`)
}