import axios from 'axios';

class RestService {
    private static instance: RestService;
    private baseURL: string;

    private constructor() {
        this.baseURL = 'http://localhost:3005'; // cambiar a la URL de tu servidor Node.js
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

    async signup(username: string, mail: string, password: string) {
        try {
            const response = await axios.post(`${this.baseURL}/signup`, { username: username, mail: mail, password: password });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login(username: string, password: string) {
        try {
            const response = await axios.post(`${this.baseURL}/login`, { params: {username, password}});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default RestService;
