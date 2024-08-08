import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-empty-upload',
    styleUrl: 'coreproject-shape-empty-upload.css',
    shadow: false,
})
export class CoreprojectShapeEmptyUpload {
    @Prop() variant: 'with_underline_around_pencil' | 'without_underline_around_pencil';
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    componentDidLoad() {
        this.svg_element.setAttribute('style', this._style);
    }
    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 171.25">
                    <g>
                        <g transform="translate(-469.000000, -399.000000)">
                            <g transform="translate(469.000000, 399.000000)">
                                <path d="M57.1,18c0.1,0,0.3,0,0.4-0.1c0.9-0.6,1.7-1.2,2.6-1.7c0.3-0.2,0.4-0.6,0.2-0.9c-0.2-0.3-0.6-0.4-0.9-0.2     c-0.9,0.5-1.8,1.1-2.7,1.7c-0.3,0.2-0.4,0.6-0.1,0.9C56.7,17.9,56.9,18,57.1,18" />
                                <path d="M100.3,16c1,0.5,1.9,1.1,2.8,1.9c0.7,0.6,1.3,1.2,1.9,1.9c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.4-0.2     c0.3-0.2,0.3-0.6,0.1-0.9c-0.6-0.7-1.3-1.4-2.1-2c-1-0.8-2-1.5-3.1-2c-0.3-0.2-0.7,0-0.8,0.3C99.9,15.5,100,15.9,100.3,16" />
                                <path d="M80.2,21.5c-0.2,0.3-0.1,0.7,0.2,0.9c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.6-0.3     c0.9-1.6,2.3-3.1,4.1-4.4c0.3-0.2,0.4-0.6,0.2-0.9c-0.2-0.3-0.6-0.4-0.9-0.2C82.7,18.1,81.1,19.8,80.2,21.5" />
                                <path d="M110,34c-0.3,0-0.7,0.2-0.7,0.6c-0.2,1.9-0.6,4-1.1,6.1c-0.1,0.3,0.1,0.7,0.4,0.8c0.1,0,0.1,0,0.2,0     c0.3,0,0.5-0.2,0.6-0.5c0.6-2.2,1-4.3,1.2-6.3C110.6,34.4,110.4,34.1,110,34" />
                                <path d="M89.9,20.1c0.1,0.2,0.3,0.3,0.5,0.3c0.1,0,0.2,0,0.3-0.1c0.3-0.2,0.4-0.6,0.2-0.9c-1.1-1.8-2.6-3.4-4.5-4.8     c-0.3-0.2-0.7-0.1-0.9,0.1c-0.2,0.3-0.1,0.7,0.1,0.9C87.5,17,88.9,18.5,89.9,20.1" />
                                <path d="M89.5,15.6c0.1,0,0.1,0,0.2,0c1.6-0.5,3.3-0.8,4.9-0.8c0.4,0,0.7,0,1.1,0c0.4,0,0.7-0.2,0.7-0.6     c0-0.3-0.2-0.7-0.6-0.7c-0.4,0-0.8-0.1-1.2-0.1h0c-1.7,0-3.5,0.3-5.3,0.9c-0.3,0.1-0.5,0.5-0.4,0.8C89,15.4,89.2,15.6,89.5,15.6" />
                                <path d="M88.8,29.4c-0.3,0.2-0.4,0.6-0.2,0.9c0.1,0.2,0.3,0.3,0.5,0.3c0.1,0,0.2,0,0.3-0.1c2-1.2,3.1-3.3,3.1-5.7     l0-0.2c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6l0,0.2C91.3,26.7,90.4,28.4,88.8,29.4" />
                                <path d="M80.8,27.2c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.4-0.5-0.8-0.4c-0.3,0.1-0.5,0.4-0.4,0.8     c0.1,0.3,0.2,0.6,0.4,0.9c1,1.9,2.6,3.2,4.5,3.6c0,0,0.1,0,0.1,0c0.3,0,0.6-0.2,0.6-0.5c0.1-0.3-0.1-0.7-0.5-0.8     C82.8,29.8,81.5,28.8,80.8,27.2" />
                                <path d="M109.3,29.7c0,0.3,0.3,0.6,0.6,0.6c0,0,0,0,0.1,0c0.3,0,0.6-0.3,0.6-0.7c-0.2-2.3-0.8-4.4-1.7-6.3     c-0.1-0.3-0.5-0.5-0.8-0.3c-0.3,0.1-0.5,0.5-0.3,0.8C108.6,25.6,109.1,27.6,109.3,29.7" />
                                <path d="M75.4,12.3c2.1,0.1,4.1,0.6,6,1.2c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.2,0.6-0.4c0.1-0.3,0-0.7-0.4-0.8     c-2-0.7-4.1-1.2-6.4-1.3c-0.3,0-0.7,0.2-0.7,0.6C74.8,11.9,75.1,12.2,75.4,12.3" />
                                <path d="M64.3,14.1c0.1,0,0.2,0,0.2,0c2-0.8,4-1.3,6-1.6c0.3-0.1,0.6-0.4,0.5-0.7c-0.1-0.3-0.4-0.6-0.7-0.5     c-2.1,0.3-4.2,0.9-6.2,1.7c-0.3,0.1-0.5,0.5-0.4,0.8C63.8,13.9,64.1,14.1,64.3,14.1" />
                                <path d="M130.8,118.3c-0.1,1-0.9,1.8-1.9,1.8H24.1c-0.9,0-1.5-0.6-1.6-1.5l-5.2-54.1c-0.1-1,0.8-2,1.8-2h0.6     l113.9,0.1c1.4,0,2.5,1.3,2.4,2.5L130.8,118.3z M99,60.1c0,0,1.1-1.8,2.6-4.3c0.2-0.3,0.6-0.4,0.9-0.2c0.3,0.2,0.4,0.6,0.2,0.9     c-1.5,2.6-2.6,4.3-2.6,4.4c-0.1,0.2-0.3,0.3-0.5,0.3c-0.1,0-0.2,0-0.3-0.1C98.9,60.8,98.8,60.4,99,60.1L99,60.1z M135.6,58.3     l-1.6,0v-8.6c0-2-1.6-3.6-3.6-3.6h-22.6c-0.5,1.3-1.1,2.7-1.9,4.2c-0.1,0.2-0.3,0.4-0.6,0.4c-0.1,0-0.2,0-0.3-0.1     c-0.3-0.2-0.4-0.5-0.3-0.8c0.6-1.3,1.2-2.5,1.6-3.7h-54L49.1,41c-0.6-1-1.6-1.5-2.8-1.5h-26c-1.4,0-2.6,1.2-2.6,2.6v4.1v1.5v10.9     l-1,0c-2.4,0.9-4.1,3.3-3.8,6.1l5.4,55.1c0.3,3,2.8,5.3,5.8,5.3h104.4c3,0,5.6-2.3,5.8-5.3l5.4-55.1     C140.5,61.6,138.5,58.9,135.6,58.3L135.6,58.3z" />
                                <path d="M49,22c0.3,0.6,1,0.8,1.5,0.6l4.2-2c0.6-0.3,0.8-1,0.6-1.5c-0.3-0.6-1-0.8-1.5-0.6l-4.2,2     C49,20.7,48.7,21.4,49,22" />
                                <path d="M46.4,18.1l2.9,1.2l3.7-1.7l0.3-2.9c-0.1-1.3-0.7-1.9-1.5-2c-0.9-0.2-3.5,0.7-2.5,2.4     c-1.4-1.6-2.8-0.6-3.4-0.1C45.2,15.6,45.2,17.3,46.4,18.1" />
                                <path d="M58.1,25.8c0.4-0.7,0.3-1.5-0.6-2.4L55,21.7l-3.7,1.7l-1,2.9c-0.2,1.4,1.2,2.6,2,2.4s2.5-0.5,2.2-2.6     C55.3,27.9,57.6,26.6,58.1,25.8" />
                            </g>
                        </g>
                    </g>
                </svg>
            </Host>
        );
    }
}
