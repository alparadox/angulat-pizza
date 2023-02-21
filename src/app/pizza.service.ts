import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPizza} from "./interfaces/pizza";
import {Categories} from "./data";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  public filter: string = '';

  private pizzasUrl = 'https://63d245591780fd6ab9c09f87.mockapi.io/items';

  constructor(
    private http: HttpClient
  ) { }

  public getPizzas(): Observable<IPizza[]> {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("category",Categories.Closed);

    return this.http.get<IPizza[]>(this.pizzasUrl, {params: queryParams});
  }

  public refreshPizzas(): void {

  }

}
