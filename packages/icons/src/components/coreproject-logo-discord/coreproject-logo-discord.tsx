
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-logo-discord',
    shadow: true,
    styleUrl: 'coreproject-logo-discord.scss',
})
export class CoreprojectLogoDiscord {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<path d="M20.307 4.49591C18.787 3.79859 17.1412 3.29248 15.4269 3.00005C15.4119 2.99958 15.3969 3.00235 15.3831 3.00818C15.3693 3.01401 15.3569 3.02276 15.3469 3.03379C15.1412 3.40495 14.9012 3.88857 14.7412 4.25972C12.9228 3.98979 11.0736 3.98979 9.2553 4.25972C9.0953 3.87732 8.85529 3.40495 8.63814 3.03379C8.62671 3.0113 8.59242 3.00005 8.55814 3.00005C6.8438 3.29248 5.20947 3.79859 3.678 4.49591C3.66657 4.49591 3.65515 4.50716 3.64372 4.5184C0.53506 9.09596 -0.322107 13.5498 0.100762 17.9586C0.100762 17.9811 0.112191 18.0036 0.135048 18.0149C2.19225 19.4995 4.16945 20.3992 6.12378 20.9953C6.15807 21.0066 6.19236 20.9953 6.20379 20.9728C6.66094 20.3543 7.07238 19.7019 7.42668 19.0159C7.44954 18.9709 7.42668 18.9259 7.38096 18.9146C6.72952 18.6672 6.11236 18.3748 5.50662 18.0374C5.46091 18.0149 5.46091 17.9474 5.4952 17.9136C5.62091 17.8237 5.74663 17.7224 5.87235 17.6325C5.89521 17.61 5.92949 17.61 5.95235 17.6212C9.88389 19.387 14.124 19.387 18.0098 17.6212C18.0327 17.61 18.067 17.61 18.0898 17.6325C18.2155 17.7337 18.3413 17.8237 18.467 17.9249C18.5127 17.9586 18.5127 18.0261 18.4556 18.0486C17.8612 18.3973 17.2327 18.6784 16.5812 18.9259C16.5355 18.9371 16.5241 18.9934 16.5355 19.0271C16.9012 19.7132 17.3127 20.3655 17.7584 20.9841C17.7927 20.9953 17.827 21.0066 17.8612 20.9953C19.827 20.3992 21.8042 19.4995 23.8614 18.0149C23.8843 18.0036 23.8957 17.9811 23.8957 17.9586C24.3986 12.8637 23.0614 8.44363 20.3527 4.5184C20.3413 4.50716 20.3299 4.49591 20.307 4.49591ZM8.02098 15.2706C6.8438 15.2706 5.86092 14.2021 5.86092 12.8862C5.86092 11.5703 6.82095 10.5018 8.02098 10.5018C9.23244 10.5018 10.1925 11.5816 10.181 12.8862C10.181 14.2021 9.22101 15.2706 8.02098 15.2706ZM15.9869 15.2706C14.8097 15.2706 13.8269 14.2021 13.8269 12.8862C13.8269 11.5703 14.7869 10.5018 15.9869 10.5018C17.1984 10.5018 18.1584 11.5816 18.147 12.8862C18.147 14.2021 17.1984 15.2706 15.9869 15.2706Z" fill="currentColor"/>
</svg>
</Host>)
    }
}
