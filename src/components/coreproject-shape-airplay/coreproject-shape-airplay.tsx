import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-airplay',
    shadow: true,
    styleUrl: 'coreproject-shape-airplay.css',
})
export class CoreprojectShapeAirplay {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    @Watch('_style')
    watch_Style(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }

    @Watch('height')
    watchHeight(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (!is_number(newValue)) throw new Error(`width:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_582_66)">
                        <path
                            d="M9.25 21.25H8C7.33696 21.25 6.70107 20.9866 6.23223 20.5178C5.76339 20.0489 5.5 19.413 5.5 18.75V6.25C5.5 5.58696 5.76339 4.95107 6.23223 4.48223C6.70107 4.01339 7.33696 3.75 8 3.75H28C28.663 3.75 29.2989 4.01339 29.7678 4.48223C30.2366 4.95107 30.5 5.58696 30.5 6.25V18.75C30.5 19.413 30.2366 20.0489 29.7678 20.5178C29.2989 20.9866 28.663 21.25 28 21.25H26.75"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M18 18.75L24.25 26.25H11.75L18 18.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_582_66" x="-1" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_66" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_66" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}
