import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-thumbs-down',
    shadow: true,
    styleUrl: 'coreproject-shape-thumbs-down.css',
})
export class CoreprojectShapeThumbsDown {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.2498 2.49996H24.5873C25.2947 2.48745 25.9822 2.73513 26.5191 3.19599C27.056 3.65684 27.405 4.29879 27.4998 4.99996V13.75C27.405 14.4511 27.056 15.0931 26.5191 15.5539C25.9822 16.0148 25.2947 16.2625 24.5873 16.25H21.2498M12.4998 18.75V23.75C12.4998 24.7445 12.8949 25.6984 13.5981 26.4016C14.3014 27.1049 15.2552 27.5 16.2498 27.5L21.2498 16.25V2.49996H7.14979C6.54688 2.49315 5.96182 2.70446 5.50241 3.09496C5.043 3.48545 4.7402 4.02883 4.64979 4.62496L2.92479 15.875C2.87041 16.2333 2.89458 16.5991 2.99562 16.9471C3.09666 17.2952 3.27217 17.6171 3.50997 17.8906C3.74778 18.164 4.04219 18.3825 4.37283 18.5309C4.70346 18.6793 5.06241 18.7541 5.42479 18.75H12.4998Z"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Host>
        );
    }
}