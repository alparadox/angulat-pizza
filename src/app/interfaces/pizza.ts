import {PizzaType} from "../enums/pizza-type";
import {PizzaSize} from "../enums/pizza-size";

export interface IPizza {
  id: number,
  imageUrl: string,
  title: string,
  types: PizzaType[],
  sizes: PizzaSize[],
  price: number,
  category: number,
  rating: number
}
