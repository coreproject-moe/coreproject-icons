
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-bell-off',
    shadow: true,
    styleUrl: 'coreproject-shape-bell-off.css',
})
export class CoreprojectShapeBellOff {

    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    @Watch('_style')
    watch_Style(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }

    @Watch('height')
    watchHeight(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render(){
        return(
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_130)">
<path d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2874 16.25C22.7313 14.2143 22.4662 12.1101 22.4999 10" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.825 7.8252C7.60783 8.52971 7.49826 9.26297 7.5 10.0002C7.5 18.7502 3.75 21.2502 3.75 21.2502H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.4999 9.9999C22.5019 8.64123 22.1348 7.30753 21.4378 6.14126C20.7408 4.975 19.7401 4.01997 18.5426 3.3782C17.345 2.73643 15.9956 2.43202 14.6385 2.49748C13.2814 2.56295 11.9676 2.99583 10.8374 3.7499" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.25L28.75 28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_130">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    }

}

    