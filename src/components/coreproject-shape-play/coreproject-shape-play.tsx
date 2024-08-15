
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-play',
    shadow: true,
    styleUrl: 'coreproject-shape-play.css',
})
export class CoreprojectShapePlay {

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
<path d="M6.25 3.75L23.75 15L6.25 26.25V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
