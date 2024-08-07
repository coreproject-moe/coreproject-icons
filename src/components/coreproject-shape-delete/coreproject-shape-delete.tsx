import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-delete',
    styleUrl: 'coreproject-shape-delete.css',
    shadow: true,
})
export class CoreprojectShapeDelete {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    componentDidLoad() {
        if (this.svg_element) this.svg_element.setAttribute('style', this._style);
    }
    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 3H2.5H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M4 3V2C4 1.73478 4.10536 1.48043 4.29289 1.29289C4.48043 1.10536 4.73478 1 5 1H7C7.26522 1 7.51957 1.10536 7.70711 1.29289C7.89464 1.48043 8 1.73478 8 2V3M9.5 3V10C9.5 10.2652 9.39464 10.5196 9.20711 10.7071C9.01957 10.8946 8.76522 11 8.5 11H3.5C3.23478 11 2.98043 10.8946 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10V3H9.5Z"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path d="M5 5.5V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 5.5V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
