import { IDataProvider, Data } from './interfaces';
import axios from 'axios';

export default class DataProvider implements IDataProvider {
    
    private transformToData(data: any) : Data{
        if(!data) return {} as Data;

        return data as Data;
    }

    async getData() : Promise<Data> {
        const localStorageData = localStorage.getItem('localState');

        if(!localStorageData) {
            const data = (await axios.get('entries.json')).data
            return this.transformToData(data);
        }
        
        return this.transformToData(JSON.parse(localStorageData));
    }

    saveData(data : Data) : void {
        localStorage.setItem('localState', JSON.stringify(data));
    }
}

