import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  public miformulario: FormGroup = this._fb.group({
    nombre: ['', [Validators.required]],
  });
  public colorCustom: string = 'red';
  public texto1: string = 'Henry';
  tieneError(valor: string): boolean {
    return this.miformulario.get('nombre')?.invalid || false;
  }
  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }
  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.colorCustom = color;
  }
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}
}
