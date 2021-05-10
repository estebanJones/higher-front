import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // clickOnProfil = false;
  constructor(private el: ElementRef) { }

  @HostListener('mouseclick') onMouseClick(): void {
    this.el.nativeElement.style.display = 'block';
  }

}
