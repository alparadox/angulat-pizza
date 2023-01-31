export interface SwitchButton {
  label: string;
  id: number;
  disabled?: boolean;
}


export const DOUGH: SwitchButton[] = [
  {
    label: 'тонкое',
    id: 0,
  },
  {
    label: 'традиционное',
    id: 1,
  },
];

export const SIZES: SwitchButton[] = [
  {
    label: '26 см.',
    id: 2,
    disabled: true
  },
  {
    label: '30 см.',
    id: 3,
    disabled: true
  },
  {
    label: '40 см.',
    id: 4,
    disabled: true
  },
];
