
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-book-open',
    shadow: true,
    styleUrl: 'coreproject-shape-book-open.css',
})
export class CoreprojectShapeBookOpen {

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
<path d="M2.5 3.75H10C11.3261 3.75 12.5979 4.27678 13.5355 5.21447C14.4732 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 14.6049 24.3016 13.9017 23.5983C13.1984 22.8951 12.2446 22.5 11.25 22.5H2.5V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 3.75H20C18.6739 3.75 17.4021 4.27678 16.4645 5.21447C15.5268 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 15.3951 24.3016 16.0983 23.5983C16.8016 22.8951 17.7554 22.5 18.75 22.5H27.5V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
