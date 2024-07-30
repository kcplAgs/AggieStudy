import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/open-questions';

export const getOpenQuestionById = (questionId) => {
    return axios.get(`${API_BASE_URL}/${questionId}`);
}
