import { IDataProvider, Data } from './interfaces';
let entries = require("./entries.json");

export default class DataProvider implements IDataProvider {
    
    private transformToData(data: any) : Data{
        if(!data) return {} as Data;
        console.log('data', data)
        return data as Data;
    }

    getData() : Data {
        const localStorageData = localStorage.getItem('localState');

        if(!localStorageData) {
            return this.transformToData(entries);
        }
        return this.transformToData(JSON.parse(localStorageData));
    }

    saveData(data : Data) : void {
        localStorage.setItem('localState', JSON.stringify(data));
    }
}

