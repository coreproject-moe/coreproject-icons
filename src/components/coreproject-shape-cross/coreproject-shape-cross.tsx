import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-cross',
    styleUrl: 'coreproject-shape-cross.css',
    shadow: true,
})
export class CoreprojectShapeCross {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2536_5517)">
                        <path d="M11 3L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 3L11 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_2536_5517" x="-2" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2536_5517" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2536_5517" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}
