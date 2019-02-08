export interface ReleaseGoal {
  name: string;
  done: boolean;
}

export interface Goal {
  description: string;
  done: boolean;
}

export interface Sprint {
  name: string;
  date: string;
  goals: Goal[];
}

export interface Team {
  name: string;
  releaseGoals: ReleaseGoal[];
  sprints: Sprint[];
}

export interface Release {
  name: string;
  date: string;
  themes: string[];
  teams: Team[];
}

export interface Data {
  productName: string;
  releases: Release[];
}

export interface IDataProvider {
  getData(): Promise<Data>;
  saveData(data: Data): void;
}
