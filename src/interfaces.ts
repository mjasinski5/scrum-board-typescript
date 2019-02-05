interface Goal {
  description: string;
  done: boolean;
}

interface Sprint {
  name: string;
  date: string;
  goals: Goal[];
}
interface Release {
  name: string;
  date: string;
  themes: string[];
  sprints: Array<Sprint>;
}

export interface Data {
  teamName: string;
  releases: Release[];
}

export interface IDataProvider {
  getData(): Promise<Data>;
  saveData(data: Data): void;
}
