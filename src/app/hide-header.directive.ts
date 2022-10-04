import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]',
//   host: {
//     '(ionScroll)': 'onContentScroll($event)'
//   }

})
export class HideHeaderDirective {

    @Input('header') header: any;
    // @Input("footer") footer: any;

    private lastY = 0;

    constructor(
        private renderer: Renderer2,
        private domCtrl: DomController
    ) { }

    async  ngOnInit() {
        this.header = this.header.el;
        // this.footer = this.footer.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 150ms');
            // this.renderer.setStyle(this.footer, 'transition', 'margin-bottom 150ms');
            // this.renderer.setStyle(this.footer, 'webkitTransition', 'bottom 700ms');
        });
    }

    @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
        console.log($event.detail);
        
        if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', `-${ this.header.clientHeight }px`);
                // this.renderer.setStyle(this.footer, 'margin-bottom', `-${ this.footer.clientHeight }px`);
            });
        } else {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', '0');
                // this.renderer.setStyle(this.footer, 'margin-bottom', '0');
            });
        }

        this.lastY = $event.detail.scrollTop;
    }
}

// @Input("header") header: HTMLElement;
//   headerHeight;
//   scrollContent;

//   constructor(public element: ElementRef, public renderer: Renderer2) {

//     console.log('Hello HideHeaderDirective Directive');
//   }

//   ngOnInit(){
//     this.headerHeight = this.header.clientHeight;
//     this.renderer.setStyle(this.header, 'webkitTransition', 'top 700ms');
//     this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
//     this.renderer.setStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');
//   }

//   onContentScroll(event){
//     if(event.scrollTop > 56){
//       this.renderer.setStyle(this.header, "top", "-56px")
//       this.renderer.setStyle(this.scrollContent, "margin-top", "0px")
//     } else {
//       this.renderer.setStyle(this.header, "top", "0px");
//       this.renderer.setStyle(this.scrollContent, "margin-top", "56px")
//     }
//   }

// }