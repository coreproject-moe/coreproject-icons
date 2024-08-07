import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-moon',
    styleUrl: 'coreproject-shape-moon.css',
    shadow: true,
})
export class CoreprojectShapeMoon {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5004 9.65833C16.3693 11.0768 15.837 12.4287 14.9656 13.5557C14.0943 14.6826 12.92 15.5382 11.5802 16.0221C10.2403 16.5061 8.79039 16.5984 7.39999 16.2884C6.00959 15.9784 4.73623 15.2788 3.72893 14.2715C2.72162 13.2642 2.02202 11.9908 1.712 10.6004C1.40197 9.21001 1.49434 7.76007 1.97829 6.42025C2.46224 5.08042 3.31776 3.90614 4.44475 3.03479C5.57174 2.16345 6.92357 1.63109 8.34207 1.5C7.51158 2.62356 7.11195 4.00787 7.21585 5.40118C7.31975 6.79448 7.92029 8.10422 8.90824 9.09217C9.89619 10.0801 11.2059 10.6807 12.5992 10.7846C13.9925 10.8885 15.3768 10.4888 16.5004 9.65833Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Host>
        );
    }
}
