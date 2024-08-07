import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-notifications',
    styleUrl: 'coreproject-shape-notifications.css',
    shadow: true,
})
export class CoreprojectShapeNotifications {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.99967 16.3333C7.74508 16.3333 8.38028 15.8374 8.59161 15.1592C8.67376 14.8955 8.44248 14.6667 8.16634 14.6667H5.83301C5.55686 14.6667 5.32559 14.8955 5.40774 15.1592C5.61907 15.8374 6.25427 16.3333 6.99967 16.3333ZM12.1461 11.4798C12.0524 11.386 11.9997 11.2588 11.9997 11.1262V7.16666C11.9997 4.74749 10.7851 2.7009 8.63075 2.00626C8.41019 1.93515 8.24967 1.73635 8.24967 1.50462V1.33333C8.24967 0.641662 7.69134 0.0833282 6.99967 0.0833282C6.30801 0.0833282 5.74967 0.641662 5.74967 1.33333V1.50494C5.74967 1.73653 5.58936 1.93524 5.369 2.00646C3.22139 2.70056 1.99967 4.73992 1.99967 7.16666V11.1262C1.99967 11.2588 1.947 11.386 1.85323 11.4798L0.479454 12.8535C0.385686 12.9473 0.333008 13.0745 0.333008 13.2071V13.3333C0.333008 13.6095 0.556865 13.8333 0.833008 13.8333H13.1663C13.4425 13.8333 13.6663 13.6095 13.6663 13.3333V13.2071C13.6663 13.0745 13.6137 12.9473 13.5199 12.8535L12.1461 11.4798ZM10.333 11.6667C10.333 11.9428 10.1091 12.1667 9.83301 12.1667H4.16634C3.8902 12.1667 3.66634 11.9428 3.66634 11.6667V7.16666C3.66634 5.09999 4.92467 3.41666 6.99967 3.41666C9.07467 3.41666 10.333 5.09999 10.333 7.16666V11.6667Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
