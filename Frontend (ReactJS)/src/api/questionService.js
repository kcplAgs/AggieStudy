import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/questions';

export const getQuestionById = (questionId) => {
    return axios.get(`${API_BASE_URL}/${questionId}`);
}
