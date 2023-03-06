import axios from 'axios';

class DataService {

    constructor() {

        let service = axios.create({
            baseURL: `${import.meta.env.VITE_BASE_URL}`,
            // withCredentials: true
        });

        this.service = service;
    }

    getAllProjects = () => {
        return this.service.get("/project/get-all-projects").then((response) => response.data);
    }

    getSingleProject = (id) => {
        return this.service.get(`/project/get-single-project/${id}`).then((response) => response.data);
    }

    updateProject = (id, projectDetails, projectImages) => {
        return this.service.put(`/project/edit-project/${id}`, { projectDetails, projectImages }).then((response) => response.data);
    }

    deleteProject = (id) => {
        return this.service.delete(`/project/delete-project/${id}`).then((response) => response.data);
    }

    createProject = (projectDetails, projectImages) => {
        return this.service.post("/project/create-new-project", { projectDetails, projectImages }).then((response) => response.data);
    }

    uploadImage = (imageUrl) => {
        return this.service.post("/project/upload-image", imageUrl).then((response) => response.data);
    }

    deleteImage = (id) => {
        return this.service.delete(`/project/delete-image/${id}`).then((response) => response.data);
    }

    login = (username, password) => {
        return this.service.post("/auth/login", { username, password }).then((response) => response.data).catch((error) => (error.response.status));
    }

    signup = (username, password) => {
        return this.service.post("/auth/signup", { username, password }).then((response) => response.data).catch((error) => (error.response.status));
    }

    saveContact = ({ firstName, lastName, email, subject, message }) => {

        return this.service.post("/contact/save-contact-details", { user_firstname: firstName, user_lastname: lastName, user_email: email, message_subject: subject, message_text: message }).then((response) => response.data)
    }
}

export default DataService;