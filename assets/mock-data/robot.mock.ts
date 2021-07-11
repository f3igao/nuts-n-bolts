import { IOption } from './../../app/models/feature.interface';


export const ROBOT_CAPABILITIES: IOption[] = [
  { id: 1, name: 'Packaging', value: 'packaging', selected: false},
  { id: 2, name: 'Chess', value: 'chess', selected: false },
  { id: 3, name: 'Drawing', value: 'drawing', selected: false },
  { id: 4, name: 'Music Composition', value: 'music', selected: false },
  { id: 5, name: 'Analyze Emotions', value: 'emotions', selected: false },
  { id: 6, name: 'Telemanipulation', value: 'telemanipulation', selected: false },
  { id: 7, name: 'Welding', value: 'welding', selected: false },
  { id: 8, name: 'Painting', value: 'painting', selected: false },
  { id: 9, name: 'Vacuuming', value: 'vacuuming', selected: false },
  { id: 10, name: 'Poetry', value: 'poetry', selected: false },
  { id: 11, name: 'Make Coffee', value: 'coffee', selected: false },
];

export const ROBOT_DIVISIONS: IOption[] = [
  { id: 1, name: 'Industrial', value: 'industrial' },
  { id: 2, name: 'Domestic / Household', value: 'domestic' },
  { id: 3, name: 'Medical', value: 'medical' },
  { id: 4, name: 'Service', value: 'service' },
  { id: 5, name: 'Military', value: 'military' },
  { id: 6, name: 'Entertainment', value: 'entertainment' },
  { id: 7, name: 'Space', value: 'space' },
];

export const ROBOT_INTEL_LEVELS: IOption[] = [
  { id: 1, name: 'Artificial Narrow Intelligence (ANI)', value: 'ani' },
  { id: 2, name: 'Artificial General Intelligence (AGI)', value: 'agi' },
  { id: 3, name: 'Artificial Superintelligence (ASI)', value: 'asi' },
];
