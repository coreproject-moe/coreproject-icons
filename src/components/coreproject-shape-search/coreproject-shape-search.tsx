import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-search',
    styleUrl: 'coreproject-shape-search.css',
    shadow: true,
})
export class CoreprojectShapeSearch {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="6"
                        d="M16.5 28.5C23.1274 28.5 28.5 23.1274 28.5 16.5C28.5 9.87258 23.1274 4.5 16.5 4.5C9.87258 4.5 4.5 9.87258 4.5 16.5C4.5 23.1274 9.87258 28.5 16.5 28.5Z"
                    />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M31.5001 31.5001L24.9751 24.9751" />
                </svg>
            </Host>
        );
    }
}
