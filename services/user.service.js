import { Actions } from 'react-native-router-flux';

import Http from './http.service';
import Storage from './storage.service';

export default class UserService {

    http = new Http();
    storage = new Storage();
    apiUrl = 'http://10.0.2.2:3000';

    async signUp(userData) {
        try {
            await this.http.post(`${this.apiUrl}/register`, userData, {});
            Actions.replace('login');
        } catch (e) {
            alert(`We encountered an error: ${e.message}`);
        }
    }

    async signIn(credentials) {
        try {
            const data =  await this.http.post(`${this.apiUrl}/token`, credentials, {});
            await this.storage.set('auth-token', data.token);
            return data;
        } catch (e) {
            alert(e.message);
        }
    }


}