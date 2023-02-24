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

    deleteProject = (id) => {
        return this.service.delete(`/project/delete-project/${id}`).then((response) => response.data);
    }

    createProject = (projectDetails, projectImages) => {
        return this.service.post("/project/create-new-project", { projectDetails, projectImages }).then((response) => response.data);
    }

    uploadImage = (imageUrl) => {
        return this.service.post("/project/upload-image", imageUrl).then((response) => response.data);
    }

}

export default DataService;