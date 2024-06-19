import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/courses';

export const getCourses = () => {
    return axios.get(API_BASE_URL);
};

export const getCourseById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

export const addCourse = (course) => {
    return axios.post(API_BASE_URL, course);
};

export const updateCourse = (id, course) => {
    return axios.put(`${API_BASE_URL}/${id}`, course);
};

export const deleteCourse = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};