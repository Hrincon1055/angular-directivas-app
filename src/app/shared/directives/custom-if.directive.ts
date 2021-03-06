import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {
    console.log('custom-if.directive LINE 8 =>', 'custom if');
  }
}
