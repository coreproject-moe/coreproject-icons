import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-preference',
    styleUrl: 'coreproject-shape-preference.css',
    shadow: true,
})
export class CoreprojectShapePreference {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 6.125C14.4973 6.125 14.9742 5.92746 15.3258 5.57583C15.6775 5.2242 15.875 4.74728 15.875 4.25C15.875 3.75272 15.6775 3.27581 15.3258 2.92418C14.9742 2.57255 14.4973 2.375 14 2.375C13.5027 2.375 13.0258 2.57255 12.6742 2.92418C12.3225 3.27581 12.125 3.75272 12.125 4.25C12.125 4.74728 12.3225 5.2242 12.6742 5.57583C13.0258 5.92746 13.5027 6.125 14 6.125ZM14 8C14.7014 7.99994 15.3887 7.80319 15.9838 7.4321C16.5789 7.06101 17.0581 6.53045 17.3668 5.90069C17.6756 5.27093 17.8015 4.56721 17.7303 3.86947C17.6591 3.17173 17.3937 2.50793 16.9642 1.95347C16.5347 1.39902 15.9583 0.976128 15.3005 0.732839C14.6427 0.489551 13.9298 0.435617 13.2429 0.577162C12.5559 0.718708 11.9225 1.05006 11.4144 1.53358C10.9438 1.98145 10.5983 2.54324 10.4106 3.16333C10.3841 3.25062 10.305 3.3125 10.2138 3.3125H1.1875C0.93886 3.3125 0.700403 3.41127 0.524588 3.58709C0.348772 3.7629 0.25 4.00136 0.25 4.25C0.25 4.49864 0.348772 4.7371 0.524588 4.91291C0.700403 5.08873 0.93886 5.1875 1.1875 5.1875H10.2139C10.3051 5.1875 10.3842 5.24935 10.4106 5.33661C10.6359 6.08032 11.0872 6.73707 11.7036 7.21448C12.3609 7.72355 13.1686 7.99986 14 8ZM5.875 11.75C5.875 12.2473 5.67746 12.7242 5.32583 13.0758C4.9742 13.4275 4.49728 13.625 4 13.625C3.50272 13.625 3.02581 13.4275 2.67418 13.0758C2.32254 12.7242 2.125 12.2473 2.125 11.75C2.125 11.2527 2.32254 10.7758 2.67418 10.4242C3.02581 10.0725 3.50272 9.875 4 9.875C4.49728 9.875 4.9742 10.0725 5.32583 10.4242C5.67746 10.7758 5.875 11.2527 5.875 11.75ZM7.78581 12.6875C7.69478 12.6875 7.61577 12.7492 7.5892 12.8362C7.33917 13.6558 6.8154 14.3668 6.10312 14.8486C5.34808 15.3594 4.43289 15.5777 3.52859 15.4629C2.62428 15.348 1.79274 14.9078 1.18936 14.2245C0.585987 13.5412 0.252065 12.6616 0.25 11.75C0.24969 10.8371 0.582434 9.95535 1.18583 9.27023C1.78923 8.58511 2.62183 8.14365 3.5275 8.02861C4.43318 7.91358 5.34971 8.13289 6.10522 8.64541C6.81789 9.12888 7.34111 9.84192 7.58947 10.6633C7.61587 10.7506 7.695 10.8125 7.78623 10.8125H16.8125C17.0611 10.8125 17.2996 10.9113 17.4754 11.0871C17.6512 11.2629 17.75 11.5014 17.75 11.75C17.75 11.9986 17.6512 12.2371 17.4754 12.4129C17.2996 12.5887 17.0611 12.6875 16.8125 12.6875H7.78581Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
