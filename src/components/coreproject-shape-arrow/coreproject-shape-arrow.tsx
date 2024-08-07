import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-arrow',
    styleUrl: 'coreproject-shape-arrow.css',
    shadow: true,
})
export class CoreprojectShapeArrow {
    @Prop() variant: 'outline' | 'fill';
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    componentDidLoad() {
        if (this.svg_element) this.svg_element.setAttribute('style', this._style);
    }
    render() {
        if (this.variant === 'outline') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <path
                            fill="currentColor"
                            d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-80h40a8 8 0 0 0 5.66-13.66ZM176 112a8 8 0 0 0-8 8v88H88v-88a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Z"
                        />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'fill') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <path
                            fill="currentColor"
                            d="M231.39 123.06A8 8 0 0 1 224 128h-40v80a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-80H32a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 0l96 96a8 8 0 0 1 1.73 8.72Z"
                        />
                    </svg>
                </Host>
            );
        }
    }
}
