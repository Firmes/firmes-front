import axios from 'axios';

class DataService {

    constructor() {

        let service = axios.create({
            baseURL: `${import.meta.env.VITE_BASE_URL}`,
            // withCredentials: true
        });

        this.service = service;
    }

    uploadImage = (imageUrl) => {
        return this.service.post("/project/upload-image", imageUrl).then((response) => response.data);
    }

}

export default DataService;