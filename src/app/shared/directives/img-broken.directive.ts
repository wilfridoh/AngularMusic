import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  //TODO: host Host HOST 
  @Input() customImg: string = '../../../assets/images/img.bloken.png'
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagen revento -->', this.elHost);
    elNative.src = this.customImg
    console.log('Esta imagen reventi----->', this.elHost)
  }
  constructor(private elHost: ElementRef) { }

}
