import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-forum',
    styleUrl: 'coreproject-shape-forum.css',
    shadow: true,
})
export class CoreprojectShapeForum {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.667 4.00002H15.3337C15.0575 4.00002 14.8337 4.22388 14.8337 4.50002V10.6667C14.8337 11.125 14.4587 11.5 14.0003 11.5H4.50033C4.22418 11.5 4.00033 11.7239 4.00033 12V12.3334C4.00033 13.25 4.75033 14 5.66699 14H13.7932C13.9258 14 14.053 14.0527 14.1468 14.1465L16.4801 16.4798C16.7951 16.7948 17.3337 16.5717 17.3337 16.1262V5.66669C17.3337 4.75002 16.5837 4.00002 15.667 4.00002ZM13.167 8.16669V2.33335C13.167 1.41669 12.417 0.666687 11.5003 0.666687H2.33366C1.41699 0.666687 0.666992 1.41669 0.666992 2.33335V11.9596C0.666992 12.405 1.20556 12.6281 1.52055 12.3131L3.85388 9.9798C3.94765 9.88603 4.07482 9.83335 4.20743 9.83335H11.5003C12.417 9.83335 13.167 9.08335 13.167 8.16669Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
