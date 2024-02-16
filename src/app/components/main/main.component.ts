import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  ciudades = ['Quito', 'Manta', 'Buenos Aires', 'Bogota', 'Lima', 'Sao Pablo'];
  showCiudad: boolean = true;
  changeCss: boolean = true;

  mostrar() {
    this.showCiudad = !this.showCiudad;
  }

  cambioCss() {
    this.changeCss = !this.changeCss;
  }

}
