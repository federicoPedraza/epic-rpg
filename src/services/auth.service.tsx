import axios from 'axios';
import { User } from '../models/user.model';
import { userData } from '../store.types';

const baseURL = process.env.REACT_APP_BASE_URL;

export async function signup(username: string, mail: string, password: string): Promise<void> {
    try {
        await axios.post(`${baseURL}/signup`, { username, mail, password });
    } catch (error) {
        throw error;
    }
}

export async function login(username: string, password: string): Promise<userData> {
    try {
        const response = await axios.post(`${baseURL}login`, { username, password });
        const userData = response.data.user;
        return userData;
    } catch (error) {
        console.log('try',error)
        throw error;
    }
}

export async function logout(): Promise<void> {
    try {
        await axios.post(`${baseURL}/logout`);
    } catch (error) {
        throw error;
    }
}

