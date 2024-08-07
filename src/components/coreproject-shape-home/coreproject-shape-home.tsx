import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-home',
    styleUrl: 'coreproject-shape-home.css',
    shadow: true,
})
export class CoreprojectShapeHome {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.99961 16V12C7.99961 11.4477 8.44733 11 8.99961 11H10.9996C11.5519 11 11.9996 11.4477 11.9996 12V16C11.9996 16.55 12.4496 17 12.9996 17H15.9996C16.5496 17 16.9996 16.55 16.9996 16V9.99997C16.9996 9.44769 17.4473 8.99997 17.9996 8.99997H18.6996C19.1596 8.99997 19.3796 8.42997 19.0296 8.12997L10.6696 0.599971C10.2896 0.259971 9.70961 0.259971 9.32961 0.599971L0.96961 8.12997C0.62961 8.42997 0.83961 8.99997 1.29961 8.99997H1.99961C2.55189 8.99997 2.99961 9.44769 2.99961 9.99997V16C2.99961 16.55 3.44961 17 3.99961 17H6.99961C7.54961 17 7.99961 16.55 7.99961 16Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
