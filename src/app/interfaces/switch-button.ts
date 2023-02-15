import {PizzaSize} from "../enums/pizza-size";
import {PizzaType} from "../enums/pizza-type";

export interface SwitchButton {
  label: string;
  id: number;
  enabled?: boolean;
}
