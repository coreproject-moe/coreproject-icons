import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-at-sign',
  styleUrl: 'coreproject-shape-at-sign.css',
  shadow: true,
})
export class CoreprojectShapeAtSign {
  @Prop() width: string = '30';
  @Prop() height: string = '30';
  @Prop() _style: string;
  svg_element: SVGElement;

  @Watch('_style')
  watch_Style(newValue: string) {
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
          width={this?.width}
          height={this?.height}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 10.0002V16.2502C20 17.2448 20.3951 18.1986 21.0984 18.9019C21.8016 19.6051 22.7555 20.0002 23.75 20.0002C24.7446 20.0002 25.6984 19.6051 26.4017 18.9019C27.1049 18.1986 27.5 17.2448 27.5 16.2502V15.0002C27.4998 12.179 26.5453 9.4408 24.7916 7.23087C23.0379 5.02093 20.5882 3.46923 17.8408 2.82807C15.0934 2.18691 12.2099 2.494 9.6592 3.69941C7.10846 4.90482 5.04051 6.93765 3.79158 9.46735C2.54266 11.9971 2.18622 14.8749 2.78022 17.6328C3.37422 20.3908 4.88373 22.8667 7.0633 24.658C9.24287 26.4493 11.9643 27.4506 14.7851 27.4991C17.6059 27.5476 20.3601 26.6405 22.6 24.9252"
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