import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const appId = "09df08e9d47eb9ebbc4ee7d93102a422";

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  private http = inject(HttpClient);

  constructor() { }

  getEstadoTiempo(ciudad: string, codigo: string) {
    const url = `${urlBase}?q=${ciudad},${codigo}&appid=${appId}`;
    console.log(url);
    return this.http.get(url);
  }

}
