import {PizzaType} from "./enums/pizza-type";
import {SwitchButton} from "./interfaces/switch-button";
import {PizzaSize} from "./enums/pizza-size";

export const DOUGH: SwitchButton[] = [
  {
    label: 'тонкое',
    id: PizzaType.Thin,
    enabled: true
  },
  {
    label: 'традиционное',
    id: PizzaType.Traditional,
    enabled: true
  },
];

export const SIZES: SwitchButton[] = [
  {
    label: '26 см.',
    id: PizzaSize.Small,
    enabled: true
  },
  {
    label: '30 см.',
    id: PizzaSize.Medium,
    enabled: true
  },
  {
    label: '40 см.',
    id: PizzaSize.Big,
    enabled: true
  },
];

export enum Categories {
  Meat,
  Vegan,
  Grill,
  Hot,
  Closed
}

export const CATEGORIES: Map<Categories, string> = new Map([
  [Categories.Meat, 'Мясные'],
  [Categories.Vegan, 'Вегетарианская'],
  [Categories.Grill, 'Гриль'],
  [Categories.Hot, 'Острые'],
  [Categories.Closed, 'Закрытые'],
]);


