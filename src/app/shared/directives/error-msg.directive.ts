import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  public htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'green';
  private _mensaje: string = 'Este campo es requerido';
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }
  // @Input() mensaje: string = 'Este campo es obligatorio';
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }
  constructor(private _el: ElementRef<HTMLElement>) {
    this.htmlElement = _el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.mensaje) {
    //   const mensaje = changes.mensaje?.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if (changes.color) {
    //   const color = changes.color?.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setStilo();
  }
  setStilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
