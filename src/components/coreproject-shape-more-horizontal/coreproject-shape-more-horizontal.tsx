import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-more-horizontal',
    shadow: true,
    styleUrl: 'coreproject-shape-more-horizontal.css',
})
export class CoreprojectShapeMoreHorizontal {
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
        if (!is_number(newValue)) throw new Error(`height:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (!is_number(newValue)) throw new Error(`width:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 16.25C15.6904 16.25 16.25 15.6904 16.25 15C16.25 14.3096 15.6904 13.75 15 13.75C14.3096 13.75 13.75 14.3096 13.75 15C13.75 15.6904 14.3096 16.25 15 16.25Z"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M23.75 16.25C24.4404 16.25 25 15.6904 25 15C25 14.3096 24.4404 13.75 23.75 13.75C23.0596 13.75 22.5 14.3096 22.5 15C22.5 15.6904 23.0596 16.25 23.75 16.25Z"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M6.25 16.25C6.94036 16.25 7.5 15.6904 7.5 15C7.5 14.3096 6.94036 13.75 6.25 13.75C5.55964 13.75 5 14.3096 5 15C5 15.6904 5.55964 16.25 6.25 16.25Z"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Host>
        );
    }
}
