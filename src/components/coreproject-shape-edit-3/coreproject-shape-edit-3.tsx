
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-edit-3',
    shadow: true,
    styleUrl: 'coreproject-shape-edit-3.css',
})
export class CoreprojectShapeEdit3 {

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
<path d="M15 25H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.625 4.37479C21.1223 3.87751 21.7967 3.59814 22.5 3.59814C22.8482 3.59814 23.193 3.66673 23.5147 3.79999C23.8365 3.93325 24.1288 4.12857 24.375 4.37479C24.6212 4.62102 24.8165 4.91334 24.9498 5.23505C25.0831 5.55677 25.1517 5.90158 25.1517 6.24979C25.1517 6.59801 25.0831 6.94282 24.9498 7.26454C24.8165 7.58625 24.6212 7.87857 24.375 8.12479L8.75 23.7498L3.75 24.9998L5 19.9998L20.625 4.37479Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
