import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-caption',
    styleUrl: 'coreproject-shape-caption.css',
    shadow: true,
})
export class CoreprojectShapeCaption {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M18 11h-1.5v-.5h-2v3h2V13H18v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1m-7 1H9.5v-.5h-2v3h2V13H11v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1m8-6H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                    />
                </svg>
            </Host>
        );
    }
}
