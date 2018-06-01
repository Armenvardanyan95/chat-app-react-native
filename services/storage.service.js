import { AsyncStorage } from 'react-native';

export default class Storage {

    async set(propName, value): Promise {
        return await AsyncStorage.setItem(propName, value);
    }

    async get(propName): Promise {
        return await AsyncStorage.getItem(propName);
    }

}