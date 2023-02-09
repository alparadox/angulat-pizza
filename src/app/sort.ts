export interface Sort {
  label: string;
  id: number;
  disabled?: boolean;
}


export const SORTING: Sort[] = [
  {
    label: 'популярности &#8595;',
    id: 0,
  },
  {
    label: 'популярности &#8593;',
    id: 1,
  },
  {
    label: 'цене &#8595;',
    id: 2,
  },
  {
    label: 'цене &#8593;',
    id: 3,
  },
  {
    label: 'алфавиту &#8595;',
    id: 4,
  },
  {
    label: 'алфавиту &#8593;',
    id: 5,
  }
];
