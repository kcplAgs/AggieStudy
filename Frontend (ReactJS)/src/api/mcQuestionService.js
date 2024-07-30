import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/mc-questions';

export const getMCQuestionById = (questionId) => {
    return axios.get(`${API_BASE_URL}/${questionId}`);
}
