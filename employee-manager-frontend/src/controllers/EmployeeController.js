import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1/employees";

function getEmployees() {
    return axios.get(API_BASE_URL)
}

function createEmployee(employee) {
    return axios.post(API_BASE_URL, employee);
}

function getEmployeeById(id) {
    return axios.get(`${API_BASE_URL}/${id}`);
}

function updateEmployee(employee) {
    return axios.put(API_BASE_URL, employee);
}

function deleteEmployee(id) {
    return axios.delete(`${API_BASE_URL}/${id}`);
}

export { getEmployees };
export { createEmployee };
export { getEmployeeById };
export { updateEmployee };
export { deleteEmployee };