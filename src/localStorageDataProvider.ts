import { IDataProvider, Data } from './interfaces';
import axios from 'axios';

export default class DataProvider implements IDataProvider {
    
    private transformToData(data: any) : Data{
        if(!data) return {} as Data;

        return data as Data;
    }

    async getData(url?: string) : Promise<Data> {
        const localStorageData = localStorage.getItem('localState');
        const dataUrl = url || 'entries.json';

        if(!localStorageData) {
            const data = (await axios.get(dataUrl)).data
            return this.transformToData(data);
        }
        
        return this.transformToData(JSON.parse(localStorageData));
    }

    saveData(data : Data) : void {
        localStorage.setItem('localState', JSON.stringify(data));
    }   
}

