import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from 'src/app/services/temperatura.service';
import { UtilService } from 'src/app/services/validations/util.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent {

  formulario!: FormGroup;
  tiempo: any;
  name: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;
  showError: boolean = false;
  mensajeError: string = '';
  fecha = new Date();

  private fb = inject(FormBuilder);
  private utilService = inject(UtilService);
  private tempService = inject(TemperaturaService);


  constructor() {
    this.iniciarFormulario();
  }
  /**
   * crea e inicia un formulario
   */
  iniciarFormulario() {
    this.formulario = this.fb.group({
      ciudad: ['', [Validators.required, this.utilService.noSantiago]],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]]
    })
  }

  consultar() {
    console.log(this.formulario.get('ciudad')?.value);
    this.tempService.getEstadoTiempo(this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value)
      .subscribe((resp: any) => {
        this.showError = false;
        this.tiempo = resp;
        this.name = this.tiempo.name;
        this.temperatura = this.tiempo.main.temp;
        this.humedad = this.tiempo.main.humidity;
        this.latitud = this.tiempo.coord.lat;
        this.longitud = this.tiempo.coord.lon;
        this.descripcion = this.tiempo.weather[0].description;
        console.log(resp);
      }, (error: any) => {
        this.showError = true;
        this.mensajeError = "Error al consultar estado de texto";
      })
  }


}
