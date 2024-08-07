import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-headphone',
    styleUrl: 'coreproject-shape-headphone.css',
    shadow: true,
})
export class CoreprojectShapeHeadphone {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.75 22.5V15C3.75 12.0163 4.93526 9.15483 7.04505 7.04505C9.15483 4.93526 12.0163 3.75 15 3.75C17.9837 3.75 20.8452 4.93526 22.955 7.04505C25.0647 9.15483 26.25 12.0163 26.25 15V22.5"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M26.25 23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H22.5C21.837 26.25 21.2011 25.9866 20.7322 25.5178C20.2634 25.0489 20 24.413 20 23.75V20C20 19.337 20.2634 18.7011 20.7322 18.2322C21.2011 17.7634 21.837 17.5 22.5 17.5H26.25V23.75ZM3.75 23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H7.5C8.16304 26.25 8.79893 25.9866 9.26777 25.5178C9.73661 25.0489 10 24.413 10 23.75V20C10 19.337 9.73661 18.7011 9.26777 18.2322C8.79893 17.7634 8.16304 17.5 7.5 17.5H3.75V23.75Z"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </Host>
        );
    }
}
