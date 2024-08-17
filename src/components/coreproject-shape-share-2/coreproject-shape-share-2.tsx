import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-share-2',
    shadow: true,
    styleUrl: 'coreproject-shape-share-2.css',
})
export class CoreprojectShapeShare2 {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_583_471)">
                        <path
                            d="M24.5 10C26.5711 10 28.25 8.32107 28.25 6.25C28.25 4.17893 26.5711 2.5 24.5 2.5C22.4289 2.5 20.75 4.17893 20.75 6.25C20.75 8.32107 22.4289 10 24.5 10Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.5 18.75C11.5711 18.75 13.25 17.0711 13.25 15C13.25 12.9289 11.5711 11.25 9.5 11.25C7.42893 11.25 5.75 12.9289 5.75 15C5.75 17.0711 7.42893 18.75 9.5 18.75Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M24.5 27.5C26.5711 27.5 28.25 25.8211 28.25 23.75C28.25 21.6789 26.5711 20 24.5 20C22.4289 20 20.75 21.6789 20.75 23.75C20.75 25.8211 22.4289 27.5 24.5 27.5Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M12.7373 16.8877L21.2748 21.8627" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.2623 8.1377L12.7373 13.1127" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_583_471" x="-2" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_471" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_471" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}
