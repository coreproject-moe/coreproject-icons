import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-schedule',
    styleUrl: 'coreproject-shape-schedule.css',
    shadow: true,
})
export class CoreprojectShapeSchedule {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.667 2.49998H15.3337C15.0575 2.49998 14.8337 2.27612 14.8337 1.99998V1.66665C14.8337 1.20831 14.4587 0.833313 14.0003 0.833313C13.542 0.833313 13.167 1.20831 13.167 1.66665V1.99998C13.167 2.27612 12.9431 2.49998 12.667 2.49998H5.33366C5.05752 2.49998 4.83366 2.27612 4.83366 1.99998V1.66665C4.83366 1.20831 4.45866 0.833313 4.00033 0.833313C3.54199 0.833313 3.16699 1.20831 3.16699 1.66665V1.99998C3.16699 2.27612 2.94313 2.49998 2.66699 2.49998H2.33366C1.41699 2.49998 0.666992 3.24998 0.666992 4.16665V17.5C0.666992 18.4166 1.41699 19.1666 2.33366 19.1666H15.667C16.5837 19.1666 17.3337 18.4166 17.3337 17.5V4.16665C17.3337 3.24998 16.5837 2.49998 15.667 2.49998ZM14.8337 17.5H3.16699C2.70866 17.5 2.33366 17.125 2.33366 16.6666V6.66665H15.667V16.6666C15.667 17.125 15.292 17.5 14.8337 17.5Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
