
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-minimize',
    shadow: true,
    styleUrl: 'coreproject-shape-minimize.css',
})
export class CoreprojectShapeMinimize {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<path d="M10 3.75V7.5C10 8.16304 9.73661 8.79893 9.26777 9.26777C8.79893 9.73661 8.16304 10 7.5 10H3.75M26.25 10H22.5C21.837 10 21.2011 9.73661 20.7322 9.26777C20.2634 8.79893 20 8.16304 20 7.5V3.75M20 26.25V22.5C20 21.837 20.2634 21.2011 20.7322 20.7322C21.2011 20.2634 21.837 20 22.5 20H26.25M3.75 20H7.5C8.16304 20 8.79893 20.2634 9.26777 20.7322C9.73661 21.2011 10 21.837 10 22.5V26.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
