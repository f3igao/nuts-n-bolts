export class IInterest {
  id: number;
  name: string;
  selected: boolean;
}

export class IRegistrationFormValues {
  name: string;
  dob: string;
  type: string;
  interests: IInterest[];
}
