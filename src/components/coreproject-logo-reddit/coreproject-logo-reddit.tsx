import { Component, Host, h, Prop, Watch } from '@stencil/core';

import { css_to_jsx } from '$utils/css_to_jsx';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-logo-reddit',
    styleUrl: 'coreproject-logo-reddit.css',
    shadow: true,
})
export class CoreprojectLogoReddit {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    @Watch('height')
    watchHeight(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${this.height} is not a string or a number string`);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${this.height} is not a string or a number string`);
    }

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM23.7 16.995C23.73 17.205 23.745 17.43 23.745 17.655C23.745 21.015 19.83 23.745 15 23.745C10.17 23.745 6.255 21.015 6.255 17.655C6.255 17.43 6.27 17.205 6.3 16.995C5.535 16.65 5.01 15.885 5.01 15C5.00778 14.5699 5.1327 14.1487 5.36909 13.7893C5.60548 13.4299 5.94278 13.1484 6.33863 12.9802C6.73449 12.8119 7.17124 12.7643 7.59404 12.8435C8.01683 12.9226 8.40681 13.1249 8.715 13.425C10.23 12.33 12.33 11.64 14.655 11.565L15.765 6.33C15.78 6.225 15.84 6.135 15.93 6.09C16.02 6.03 16.125 6.015 16.23 6.03L19.86 6.81C19.9831 6.56037 20.1708 6.34822 20.4035 6.19557C20.6363 6.04291 20.9056 5.9553 21.1836 5.94183C21.4616 5.92836 21.7382 5.98952 21.9846 6.11896C22.231 6.24841 22.4383 6.44142 22.585 6.67798C22.7316 6.91454 22.8123 7.18603 22.8187 7.4643C22.8251 7.74257 22.7569 8.01747 22.6212 8.26049C22.4855 8.50352 22.2873 8.70581 22.047 8.8464C21.8068 8.98698 21.5333 9.06073 21.255 9.06C20.415 9.06 19.74 8.4 19.695 7.575L16.44 6.885L15.45 11.565C17.745 11.64 19.8 12.345 21.3 13.425C21.5299 13.2054 21.8051 13.0387 22.1062 12.9366C22.4073 12.8345 22.7271 12.7994 23.0432 12.8337C23.3592 12.8681 23.664 12.9711 23.9361 13.1355C24.2082 13.3 24.4411 13.5219 24.6185 13.7858C24.7959 14.0497 24.9135 14.3491 24.9631 14.6631C25.0126 14.9772 24.993 15.2983 24.9055 15.604C24.818 15.9097 24.6648 16.1925 24.4566 16.4328C24.2483 16.6731 23.9901 16.8649 23.7 16.995Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
