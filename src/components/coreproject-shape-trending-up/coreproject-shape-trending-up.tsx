import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-trending-up',
    styleUrl: 'coreproject-shape-trending-up.css',
    shadow: true,
})
export class CoreprojectShapeTrendingUp {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1911_2848)">
                        <path d="M15.5 3L10.75 7.75L8.25 5.25L4.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5 3H15.5V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1911_2848" x="0" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1911_2848" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1911_2848" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}
