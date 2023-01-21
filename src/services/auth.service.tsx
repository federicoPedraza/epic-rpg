import axios from 'axios';
import { User } from '../models/user.model';
import useSession from '../store';

const baseURL = 'localhost:3005';

export async function signup(username: string, mail: string, password: string): Promise<void> {
    try {
        await axios.post(`${baseURL}/signup`, { username, mail, password });
    } catch (error) {
        throw error;
    }
}

export async function login(username: string, password: string): Promise<User> {
    try {
        const response = await axios.post(`${baseURL}/login`, { username, password });
        const userData = response.data.user;
        return {
            username: userData.username,
            id: userData.id
        } as User;
    } catch (error) {
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

