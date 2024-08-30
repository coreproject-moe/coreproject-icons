
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-logo',
    shadow: true,
    styleUrl: 'coreproject-shape-logo.css',
})
export class CoreprojectShapeLogo {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}><g filter="url(#filter0_d_3565_5702)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 31.9999C19.5228 31.9999 24 27.5536 24 22.0689C24 16.5841 19.5228 12.1378 14 12.1378C8.47715 12.1378 4 16.5841 4 22.0689C4 27.5536 8.47715 31.9999 14 31.9999ZM13.9991 26.4828C16.4537 26.4828 18.4436 24.5067 18.4436 22.069C18.4436 19.6313 16.4537 17.6552 13.9991 17.6552C11.5445 17.6552 9.55469 19.6313 9.55469 22.069C9.55469 24.5067 11.5445 26.4828 13.9991 26.4828Z" fill="#7569E1"></path><ellipse cx="13.9993" cy="3.31035" rx="3.33333" ry="3.31035" fill="#DCD9F7"></ellipse></g><defs><filter id="filter0_d_3565_5702" x="0" y="0" width="28" height="39.9999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3565_5702"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3565_5702" result="shape"></feBlend></filter></defs></svg></Host>)
    }
}
