
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-forum',
    shadow: true,
    styleUrl: 'coreproject-shape-forum.css',
})
export class CoreprojectShapeForum {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<g clip-path="url(#clip0_5163_1351)">
<path d="M16.666 4.99999H16.3327C16.0565 4.99999 15.8327 5.22385 15.8327 5.49999V11.6667C15.8327 12.125 15.4577 12.5 14.9993 12.5H5.49935C5.22321 12.5 4.99935 12.7238 4.99935 13V13.3333C4.99935 14.25 5.74935 15 6.66602 15H14.7922C14.9249 15 15.052 15.0527 15.1458 15.1464L17.4791 17.4798C17.7941 17.7948 18.3327 17.5717 18.3327 17.1262V6.66666C18.3327 5.74999 17.5827 4.99999 16.666 4.99999ZM14.166 9.16666V3.33332C14.166 2.41666 13.416 1.66666 12.4993 1.66666H3.33268C2.41602 1.66666 1.66602 2.41666 1.66602 3.33332V12.9596C1.66602 13.405 2.20459 13.6281 2.51957 13.3131L4.8529 10.9798C4.94667 10.886 5.07385 10.8333 5.20646 10.8333H12.4993C13.416 10.8333 14.166 10.0833 14.166 9.16666Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_5163_1351">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
</svg>
</Host>)
    }
}