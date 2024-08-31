
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-cast',
    shadow: true,
    styleUrl: 'coreproject-shape-cast.css',
})
export class CoreprojectShapeCast {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<path d="M2.5 10V7.5C2.5 6.83696 2.76339 6.20107 3.23223 5.73223C3.70107 5.26339 4.33696 5 5 5H25C25.663 5 26.2989 5.26339 26.7678 5.73223C27.2366 6.20107 27.5 6.83696 27.5 7.5V22.5C27.5 23.163 27.2366 23.7989 26.7678 24.2678C26.2989 24.7366 25.663 25 25 25H17.5M2.5 20.125C3.70112 20.37 4.80368 20.9627 5.67048 21.8295C6.53728 22.6963 7.13004 23.7989 7.375 25L2.5 20.125ZM2.5 15.0625C5.03849 15.3448 7.40534 16.4826 9.21139 18.2886C11.0174 20.0947 12.1552 22.4615 12.4375 25L2.5 15.0625Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 25H2.5125" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}