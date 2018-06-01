import Http from './http.service';
import Storage from './storage.service';

interface IBase {
    _id: string
}

interface IUser extends IBase {
  email: string,
  password: string,
  fullName: string
}

interface IMessage {
    text: string,
    author: IUser
}

export default class MessagesService {

    http = new Http();
    storage = new Storage();
    apiUrl = 'http://10.0.2.2:3000';

    async getToken() {
        const token = await this.storage.get('auth-token');
        return `Bearer ${token}`;
    }

    async getMessages(): Promise<IMessage[]> {
        try {
            const { messages } = await this.http.get(`${this.apiUrl}/messages`, {
                headers: {Authorization: await this.getToken()}
            });
            return messages;
        } catch (e) {
            alert(e.message)
        }
    }




}