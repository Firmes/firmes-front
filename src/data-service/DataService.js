import axios from 'axios';

class DataService {

    constructor() {

        let service = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}`,
            withCredentials: true
        });

        this.service = service;
    }

}

export default DataService;