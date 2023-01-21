import axios from 'axios';

class RestService {
    private static instance: RestService;
    private baseURL?: string;

    private constructor() {
        this.baseURL = process.env.REACT_APP_BASE_URL; // cambiar a la URL de tu servidor Node.js
    }

    public static getInstance(): RestService {
        if (!RestService.instance) {
            RestService.instance = new RestService();
        }
        return RestService.instance;
    }

    async getUsers() {
        try {
            const response = await axios.get(`${this.baseURL}/users`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default RestService;
