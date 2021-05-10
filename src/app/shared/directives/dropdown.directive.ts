import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() appDropdown = false;
  // clickOnProfil = false;
  constructor(private el: ElementRef) { }

  @HostListener('mouseclick') onMouseClick(): void {
    this.el.nativeElement.style.display = 'block';
  }

}
