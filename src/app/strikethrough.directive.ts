import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  

  constructor(private elem:ElementRef) {
    //this.elem.nativeElement.style.textDecoration='line-through';
   
  }

    //this addds the strikethrough directly to the element
    //this.elem.nativeElement.style.textDecoration='line-through';

    @HostListener('click') onClick(){
      this.textDeco("line-through")
    }

    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("None")
    }

    private textDeco(action:string) {
      this.elem.nativeElement.style.textDecoration = action;
      
    }
  

}
