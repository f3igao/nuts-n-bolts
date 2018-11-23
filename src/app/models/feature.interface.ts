export class IOption {
  id: number;
  name: string;
  value: string;
  selected?: boolean;
}

export class IRobot {
  name: string;
  dob: string;
  intel: string;
  division: string;
  capabilities: string[];
  description: string;
  image?: string;
  flipped?: boolean;
}

export class ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
