import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPizza} from "./interfaces/pizza";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzasUrl = 'https://63d245591780fd6ab9c09f87.mockapi.io/items';

  constructor(
    private http: HttpClient
  ) { }

  public getPizzas(): Observable<IPizza[]> {
    return this.http.get<IPizza[]>(this.pizzasUrl);
  }

}
