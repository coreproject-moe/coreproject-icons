import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-explore',
    styleUrl: 'coreproject-shape-explore.css',
    shadow: true,
})
export class CoreprojectShapeExplore {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM5.65317 13.0185C5.26027 13.864 6.13598 14.7397 6.98146 14.3468L11.3472 12.318C11.7752 12.1191 12.1191 11.7752 12.318 11.3472L14.3468 6.98146C14.7397 6.13599 13.864 5.26026 13.0185 5.65317L8.65283 7.68197C8.22479 7.88089 7.88089 8.22479 7.68197 8.65283L5.65317 13.0185ZM10 8.9C10.61 8.9 11.1 9.39 11.1 10C11.1 10.61 10.61 11.1 10 11.1C9.39 11.1 8.9 10.61 8.9 10C8.9 9.39 9.39 8.9 10 8.9Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
