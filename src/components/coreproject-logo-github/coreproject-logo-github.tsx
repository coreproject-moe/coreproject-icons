import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'coreproject-logo-github',
    styleUrl: 'coreproject-logo-github.css',
    shadow: true,
})
export class CoreprojectLogoGithub {
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
                        d="M15 0C13.0302 0 11.0796 0.387987 9.25975 1.14181C7.43986 1.89563 5.78628 3.00052 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 21.63 4.305 27.255 10.26 29.25C11.01 29.37 11.25 28.905 11.25 28.5V25.965C7.095 26.865 6.21 23.955 6.21 23.955C5.52 22.215 4.545 21.75 4.545 21.75C3.18 20.82 4.65 20.85 4.65 20.85C6.15 20.955 6.945 22.395 6.945 22.395C8.25 24.675 10.455 24 11.31 23.64C11.445 22.665 11.835 22.005 12.255 21.63C8.925 21.255 5.43 19.965 5.43 14.25C5.43 12.585 6 11.25 6.975 10.185C6.825 9.81 6.3 8.25 7.125 6.225C7.125 6.225 8.385 5.82 11.25 7.755C12.435 7.425 13.725 7.26 15 7.26C16.275 7.26 17.565 7.425 18.75 7.755C21.615 5.82 22.875 6.225 22.875 6.225C23.7 8.25 23.175 9.81 23.025 10.185C24 11.25 24.57 12.585 24.57 14.25C24.57 19.98 21.06 21.24 17.715 21.615C18.255 22.08 18.75 22.995 18.75 24.39V28.5C18.75 28.905 18.99 29.385 19.755 29.25C25.71 27.24 30 21.63 30 15C30 13.0302 29.612 11.0796 28.8582 9.25975C28.1044 7.43986 26.9995 5.78628 25.6066 4.3934C24.2137 3.00052 22.5601 1.89563 20.7403 1.14181C18.9204 0.387987 16.9698 0 15 0Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
