import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private _ref:ElementRef) {
    console.log("inside directive class") 
    this._ref.nativeElement.style.color='red';
  }

}
