export interface IOption {
  id: number;
  name: string;
  value: string;
  selected?: boolean;
}

export interface IRobot {
  name: string;
  dob: string;
  intel: string;
  division: string;
  capabilities: string[];
  description: string;
  image?: string;
  flipped?: boolean;
}

export interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
