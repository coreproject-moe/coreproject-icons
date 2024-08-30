
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-logo-figma',
    shadow: true,
    styleUrl: 'coreproject-logo-figma.css',
})
export class CoreprojectLogoFigma {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<g clip-path="url(#clip0_582_253)">
<path d="M6.25 6.875C6.25 5.71468 6.71094 4.60188 7.53141 3.78141C8.35188 2.96094 9.46468 2.5 10.625 2.5H15V11.25H10.625C9.46468 11.25 8.35188 10.7891 7.53141 9.96859C6.71094 9.14812 6.25 8.03532 6.25 6.875Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.5H19.375C19.9495 2.5 20.5184 2.61316 21.0492 2.83303C21.58 3.05289 22.0623 3.37515 22.4686 3.78141C22.8748 4.18766 23.1971 4.66996 23.417 5.20076C23.6368 5.73156 23.75 6.30047 23.75 6.875C23.75 7.44953 23.6368 8.01844 23.417 8.54924C23.1971 9.08004 22.8748 9.56234 22.4686 9.96859C22.0623 10.3748 21.58 10.6971 21.0492 10.917C20.5184 11.1368 19.9495 11.25 19.375 11.25H15V2.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15.625C15 15.0505 15.1132 14.4816 15.333 13.9508C15.5529 13.42 15.8752 12.9377 16.2814 12.5314C16.6877 12.1252 17.17 11.8029 17.7008 11.583C18.2316 11.3632 18.8005 11.25 19.375 11.25C19.9495 11.25 20.5184 11.3632 21.0492 11.583C21.58 11.8029 22.0623 12.1252 22.4686 12.5314C22.8748 12.9377 23.1971 13.42 23.417 13.9508C23.6368 14.4816 23.75 15.0505 23.75 15.625C23.75 16.1995 23.6368 16.7684 23.417 17.2992C23.1971 17.83 22.8748 18.3123 22.4686 18.7186C22.0623 19.1248 21.58 19.4471 21.0492 19.667C20.5184 19.8868 19.9495 20 19.375 20C18.8005 20 18.2316 19.8868 17.7008 19.667C17.17 19.4471 16.6877 19.1248 16.2814 18.7186C15.8752 18.3123 15.5529 17.83 15.333 17.2992C15.1132 16.7684 15 16.1995 15 15.625V15.625Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 24.375C6.25 23.2147 6.71094 22.1019 7.53141 21.2814C8.35188 20.4609 9.46468 20 10.625 20H15V24.375C15 25.5353 14.5391 26.6481 13.7186 27.4686C12.8981 28.2891 11.7853 28.75 10.625 28.75C9.46468 28.75 8.35188 28.2891 7.53141 27.4686C6.71094 26.6481 6.25 25.5353 6.25 24.375Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 15.625C6.25 14.4647 6.71094 13.3519 7.53141 12.5314C8.35188 11.7109 9.46468 11.25 10.625 11.25H15V20H10.625C9.46468 20 8.35188 19.5391 7.53141 18.7186C6.71094 17.8981 6.25 16.7853 6.25 15.625Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_253">
<rect width="30" height="30" fill="currentColor"/>
</clipPath>
</defs>
</svg>
</Host>)
    }
}
