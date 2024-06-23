import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/exams';

export const getExamsByClassId = (classId) => {
    return axios.get(`${API_BASE_URL}/course/${classId}`);
}