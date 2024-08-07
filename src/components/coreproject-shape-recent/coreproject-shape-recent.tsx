import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-recent',
    styleUrl: 'coreproject-shape-recent.css',
    shadow: true,
})
export class CoreprojectShapeRecent {
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
                        d="M9.83301 0.5C5.85939 0.5 2.60682 3.59134 2.34942 7.4999C2.33128 7.77545 2.10915 8 1.83301 8H1.04225C0.5965 8 0.373554 8.5392 0.689144 8.854L2.81323 10.9728C3.00839 11.1674 3.32429 11.1674 3.51945 10.9728L5.64354 8.854C5.95913 8.53919 5.73618 8 5.29043 8H4.49967C4.22353 8 3.99744 7.77536 4.02072 7.50021C4.27371 4.50975 6.77638 2.16667 9.83301 2.16667C13.058 2.16667 15.6663 4.775 15.6663 8C15.6663 11.225 13.058 13.8333 9.83301 13.8333C8.4051 13.8333 7.09543 13.3144 6.08478 12.4574C5.87357 12.2783 5.5572 12.2758 5.36139 12.4716L4.88656 12.9464C4.6913 13.1417 4.69026 13.4597 4.8979 13.6417C6.21687 14.7981 7.93806 15.5 9.83301 15.5C13.9747 15.5 17.333 12.1417 17.333 8C17.333 3.85833 13.9747 0.5 9.83301 0.5ZM9.49967 4.66667C9.22353 4.66667 8.99967 4.89052 8.99967 5.16667V8.54852C8.99967 8.72508 9.09279 8.88855 9.24466 8.9786L12.114 10.6799C12.3504 10.8201 12.6557 10.7432 12.7974 10.5076L12.9238 10.2976C13.0667 10.06 12.989 9.75148 12.7506 9.60992L10.4944 8.27031C10.3427 8.18022 10.2497 8.01683 10.2497 7.84038V5.16667C10.2497 4.89052 10.0258 4.66667 9.74967 4.66667H9.49967Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
