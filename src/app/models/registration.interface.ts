export class IOption {
  id: number;
  name: string;
  value: string;
  selected?: boolean;
}

export class IRegistrationFormValues {
  name: string;
  dob: string;
  intel: string;
  division: string;
  capabilities: string[];
}
