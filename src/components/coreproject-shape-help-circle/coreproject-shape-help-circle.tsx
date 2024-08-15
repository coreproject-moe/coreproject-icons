import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-help-circle',
  styleUrl: 'coreproject-shape-help-circle.css',
  shadow: true,
})
export class CoreprojectShapeHelpCircle {
  @Prop() width: string = '30';
  @Prop() height: string = '30';
  @Prop() _style: string;
  svg_element: SVGElement;

  @Watch('_style')
  watchStyle(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
  }

  @Watch('height')
  watchHeight(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
  }

  @Watch('width')
  watchWidth(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
  }

  render() {
    return (
      <Host>
        <svg
          ref={el => (this.svg_element = el as SVGElement)}
          width={this.width}
          height={this.height}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.3623 11.2502C11.6562 10.4148 12.2362 9.71036 12.9997 9.26164C13.7633 8.81292 14.6609 8.6489 15.5338 8.79861C16.4066 8.94833 17.1983 9.40213 17.7687 10.0796C18.339 10.7571 18.6511 11.6146 18.6498 12.5002C18.6498 15.0002 14.8998 16.2502 14.8998 16.2502"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 21.25H15.0125"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Host>
    );
  }
}
