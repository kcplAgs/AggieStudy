import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/questions';

export const getQuestionById = (classId) => {
    return axios.get(`${API_BASE_URL}//${classId}`);
}