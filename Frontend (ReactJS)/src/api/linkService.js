import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/links';

export const getLinks = () => {
    return axios.get(API_BASE_URL);
};

export const getLinksByClassId = (classId) => {
    return axios.get(`${API_BASE_URL}/course/${classId}`);
}

export const getLinkById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

export const addLink = (resource) => {
    return axios.post(API_BASE_URL, resource);
};

export const updateLink = (id, resource) => {
    return axios.put(`${API_BASE_URL}/${id}`, resource);
};

export const deleteLink = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};