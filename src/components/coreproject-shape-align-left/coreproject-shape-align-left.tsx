
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-align-left',
    shadow: true,
    styleUrl: 'coreproject-shape-align-left.css',
})
export class CoreprojectShapeAlignLeft {

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
<path d="M21.25 12.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 7.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 17.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 22.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    