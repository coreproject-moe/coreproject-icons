import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-settings',
    styleUrl: 'coreproject-shape-settings.css',
    shadow: false,
})
export class CoreprojectShapeSettings {
    @Prop() varient: 'filled' | 'outline';
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };

    render() {
        if (this.varient === 'filled') {
            return (
                <Host>
                    <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_565_480)">
                            <path
                                d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M24.25 18.75C24.0836 19.127 24.034 19.5452 24.1075 19.9507C24.181 20.3562 24.3743 20.7304 24.6625 21.025L24.7375 21.1C24.9699 21.3322 25.1543 21.6079 25.2801 21.9114C25.406 22.2149 25.4707 22.5402 25.4707 22.8688C25.4707 23.1973 25.406 23.5226 25.2801 23.8261C25.1543 24.1296 24.9699 24.4053 24.7375 24.6375C24.5053 24.8699 24.2296 25.0543 23.9261 25.1801C23.6226 25.306 23.2973 25.3707 22.9688 25.3707C22.6402 25.3707 22.3149 25.306 22.0114 25.1801C21.7079 25.0543 21.4322 24.8699 21.2 24.6375L21.125 24.5625C20.8304 24.2743 20.4562 24.081 20.0507 24.0075C19.6452 23.934 19.227 23.9836 18.85 24.15C18.4803 24.3085 18.165 24.5716 17.9429 24.9069C17.7208 25.2423 17.6016 25.6353 17.6 26.0375V26.25C17.6 26.913 17.3366 27.5489 16.8678 28.0178C16.3989 28.4866 15.763 28.75 15.1 28.75C14.437 28.75 13.8011 28.4866 13.3322 28.0178C12.8634 27.5489 12.6 26.913 12.6 26.25V26.1375C12.5903 25.7238 12.4564 25.3225 12.2156 24.9859C11.9749 24.6493 11.6384 24.3929 11.25 24.25C10.873 24.0836 10.4548 24.034 10.0493 24.1075C9.64377 24.181 9.2696 24.3743 8.975 24.6625L8.9 24.7375C8.66782 24.9699 8.3921 25.1543 8.0886 25.2801C7.78511 25.406 7.45979 25.4707 7.13125 25.4707C6.80271 25.4707 6.47739 25.406 6.1739 25.2801C5.8704 25.1543 5.59468 24.9699 5.3625 24.7375C5.13006 24.5053 4.94566 24.2296 4.81985 23.9261C4.69404 23.6226 4.62928 23.2973 4.62928 22.9688C4.62928 22.6402 4.69404 22.3149 4.81985 22.0114C4.94566 21.7079 5.13006 21.4322 5.3625 21.2L5.4375 21.125C5.72567 20.8304 5.91898 20.4562 5.99251 20.0507C6.06603 19.6452 6.01639 19.227 5.85 18.85C5.69155 18.4803 5.42844 18.165 5.09308 17.9429C4.75772 17.7208 4.36473 17.6016 3.9625 17.6H3.75C3.08696 17.6 2.45107 17.3366 1.98223 16.8678C1.51339 16.3989 1.25 15.763 1.25 15.1C1.25 14.437 1.51339 13.8011 1.98223 13.3322C2.45107 12.8634 3.08696 12.6 3.75 12.6H3.8625C4.27624 12.5903 4.67751 12.4564 5.01412 12.2156C5.35074 11.9749 5.60714 11.6384 5.75 11.25C5.91639 10.873 5.96603 10.4548 5.89251 10.0493C5.81898 9.64377 5.62567 9.2696 5.3375 8.975L5.2625 8.9C5.03006 8.66782 4.84566 8.3921 4.71985 8.0886C4.59404 7.78511 4.52928 7.45979 4.52928 7.13125C4.52928 6.80271 4.59404 6.47739 4.71985 6.1739C4.84566 5.8704 5.03006 5.59468 5.2625 5.3625C5.49468 5.13006 5.7704 4.94566 6.0739 4.81985C6.37739 4.69404 6.70271 4.62928 7.03125 4.62928C7.35979 4.62928 7.68511 4.69404 7.9886 4.81985C8.2921 4.94566 8.56782 5.13006 8.8 5.3625L8.875 5.4375C9.1696 5.72567 9.54377 5.91898 9.94926 5.99251C10.3548 6.06603 10.773 6.01639 11.15 5.85H11.25C11.6197 5.69155 11.935 5.42844 12.1571 5.09308C12.3792 4.75772 12.4984 4.36473 12.5 3.9625V3.75C12.5 3.08696 12.7634 2.45107 13.2322 1.98223C13.7011 1.51339 14.337 1.25 15 1.25C15.663 1.25 16.2989 1.51339 16.7678 1.98223C17.2366 2.45107 17.5 3.08696 17.5 3.75V3.8625C17.5016 4.26473 17.6208 4.65772 17.8429 4.99308C18.065 5.32844 18.3803 5.59155 18.75 5.75C19.127 5.91639 19.5452 5.96603 19.9507 5.89251C20.3562 5.81898 20.7304 5.62567 21.025 5.3375L21.1 5.2625C21.3322 5.03006 21.6079 4.84566 21.9114 4.71985C22.2149 4.59404 22.5402 4.52928 22.8688 4.52928C23.1973 4.52928 23.5226 4.59404 23.8261 4.71985C24.1296 4.84566 24.4053 5.03006 24.6375 5.2625C24.8699 5.49468 25.0543 5.7704 25.1801 6.0739C25.306 6.37739 25.3707 6.70271 25.3707 7.03125C25.3707 7.35979 25.306 7.68511 25.1801 7.9886C25.0543 8.2921 24.8699 8.56782 24.6375 8.8L24.5625 8.875C24.2743 9.1696 24.081 9.54377 24.0075 9.94926C23.934 10.3548 23.9836 10.773 24.15 11.15V11.25C24.3085 11.6197 24.5716 11.935 24.9069 12.1571C25.2423 12.3792 25.6353 12.4984 26.0375 12.5H26.25C26.913 12.5 27.5489 12.7634 28.0178 13.2322C28.4866 13.7011 28.75 14.337 28.75 15C28.75 15.663 28.4866 16.2989 28.0178 16.7678C27.5489 17.2366 26.913 17.5 26.25 17.5H26.1375C25.7353 17.5016 25.3423 17.6208 25.0069 17.8429C24.6716 18.065 24.4085 18.3803 24.25 18.75V18.75Z"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_565_480">
                                <rect width="30" height="30" fill="currentColor" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        } else if (this.varient === 'outline') {
            return (
                <Host>
                    <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3607_1064)">
                            <path
                                d="M16.4153 10.9913C16.2768 10.883 16.2068 10.71 16.2233 10.5349C16.2398 10.3606 16.2504 10.1838 16.2504 9.99999C16.2504 9.81617 16.2398 9.63937 16.2233 9.46504C16.2068 9.28999 16.2768 9.11702 16.4153 9.00871L17.9504 7.80832C18.1087 7.68332 18.1504 7.45832 18.0504 7.27499L16.3837 4.39166C16.2837 4.20832 16.0587 4.14166 15.8754 4.20832L14.0653 4.93527C13.9011 5.0012 13.7152 4.9742 13.5704 4.87252C13.2804 4.66886 12.9757 4.49056 12.654 4.33992C12.4935 4.26476 12.3766 4.11725 12.3514 3.9418L12.0754 2.01666C12.0504 1.81666 11.8754 1.66666 11.667 1.66666H8.33369C8.12535 1.66666 7.95035 1.81666 7.92535 2.01666L7.6493 3.9418C7.62414 4.11725 7.50721 4.26472 7.34696 4.34043C7.02442 4.49282 6.71902 4.6747 6.42844 4.87679C6.28498 4.97656 6.10133 5.00189 5.93918 4.93677L4.12535 4.20832C3.93369 4.13332 3.71702 4.20832 3.61702 4.39166L1.95035 7.27499C1.84202 7.45832 1.89202 7.68332 2.05035 7.80832L3.58539 9.00871C3.7239 9.11702 3.794 9.29 3.77756 9.46506C3.76096 9.64183 3.75035 9.82091 3.75035 9.99999C3.75035 10.1791 3.76096 10.3581 3.77756 10.5349C3.794 10.71 3.7239 10.883 3.58539 10.9913L2.05035 12.1917C1.89202 12.3167 1.85035 12.5417 1.95035 12.725L3.61702 15.6083C3.71702 15.7917 3.94202 15.8583 4.12535 15.7917L5.93544 15.0647C6.09961 14.9988 6.28554 15.0258 6.43031 15.1275C6.72026 15.3311 7.02496 15.5094 7.34672 15.6601C7.50725 15.7352 7.62414 15.8827 7.6493 16.0582L7.92535 17.9833C7.95035 18.1833 8.12535 18.3333 8.33369 18.3333H11.667C11.8754 18.3333 12.0504 18.1833 12.0754 17.9833L12.3514 16.0582C12.3766 15.8827 12.4935 15.7353 12.6538 15.6595C12.9763 15.5072 13.2817 15.3253 13.5723 15.1232C13.7157 15.0234 13.8994 14.9981 14.0615 15.0632L15.8754 15.7917C16.067 15.8667 16.2837 15.7917 16.3837 15.6083L18.0504 12.725C18.1504 12.5417 18.1087 12.3167 17.9504 12.1917L16.4153 10.9913ZM10.0004 12.9167C8.39202 12.9167 7.08369 11.6083 7.08369 9.99999C7.08369 8.39166 8.39202 7.08332 10.0004 7.08332C11.6087 7.08332 12.917 8.39166 12.917 9.99999C12.917 11.6083 11.6087 12.9167 10.0004 12.9167Z"
                                fill="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_3607_1064">
                                <rect width="20" height="20" fill="currentColor" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        }
    }
}
