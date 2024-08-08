import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-logo-anime-core',
    shadow: true,
    styleUrl: 'coreproject-logo-anime-core.css',
})
export class CoreprojectLogoAnimeCore {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    componentDidLoad() {
        if (this.svg_element) this.svg_element.setAttribute('style', this._style);
    }
    render() {
        return (
            <Host>
                <svg
                    ref={el => (this.svg_element = el as SVGElement)}
                    width={this?.width}
                    height={this?.height}
                    viewBox="0 0 140 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_3571_5637)">
                        <path
                            d="M14.912 19.7753C15.4643 19.7753 15.912 19.3276 15.912 18.7753V13.427C15.912 8.37079 13.2925 6.51685 10.1766 6.51685C8.54377 6.51685 7.26248 6.92613 6.29359 7.42579C5.85055 7.65427 5.70348 8.19993 5.91771 8.65003L6.40075 9.66494C6.65214 10.1931 7.29841 10.3837 7.84132 10.1659C8.41308 9.93651 9.05315 9.77528 9.73542 9.77528C10.733 9.77528 11.4202 10.0223 11.8373 10.5105C12.2928 11.0436 11.6016 11.6438 10.9076 11.5435C7.3015 11.0223 4 12.5648 4 15.6461C4 18.0056 5.7096 20 8.7979 20C9.95425 20 10.8941 19.6377 11.6638 19.0664C11.943 18.8592 12.3825 19.0424 12.3825 19.3902C12.3825 19.6029 12.555 19.7753 12.7677 19.7753H14.912ZM11.5398 14.2884C12.0279 14.3998 12.3302 14.8999 12.1186 15.3535C11.5785 16.5115 10.4543 17.191 9.45968 17.191C8.38429 17.191 7.52949 16.6292 7.52949 15.6461C7.52949 14.3635 9.20927 13.7564 11.5398 14.2884Z"
                            fill="white"
                        />
                        <path
                            d="M25.6155 6.51685C24.4216 6.51685 23.5936 6.88973 23.0037 7.36581C22.75 7.57049 22.3066 7.40819 22.3066 7.08226C22.3066 6.8941 22.1541 6.74157 21.966 6.74157H19.7772C19.2249 6.74157 18.7772 7.18929 18.7772 7.74157V18.7753C18.7772 19.3276 19.2249 19.7753 19.7772 19.7753H21.3066C21.8589 19.7753 22.3066 19.3276 22.3066 18.7753V13.0337C22.3066 10.7303 23.7129 9.88764 24.7332 9.88764C25.8086 9.88764 27.1597 10.3652 27.1597 12.5843V18.7753C27.1597 19.3276 27.6074 19.7753 28.1597 19.7753H29.6892C30.2415 19.7753 30.6892 19.3276 30.6892 18.7753V12.5843C30.6892 8.37079 28.4005 6.51685 25.6155 6.51685Z"
                            fill="white"
                        />
                        <path
                            d="M35.3253 4.49438C36.5386 4.49438 37.5312 3.48315 37.5312 2.24719C37.5312 1.01124 36.5386 0 35.3253 0C34.112 0 33.1194 1.01124 33.1194 2.24719C33.1194 3.48315 34.112 4.49438 35.3253 4.49438ZM33.5606 18.7753C33.5606 19.3276 34.0083 19.7753 34.5606 19.7753H36.09C36.6423 19.7753 37.09 19.3276 37.09 18.7753V7.74157C37.09 7.18929 36.6423 6.74157 36.09 6.74157H34.5606C34.0083 6.74157 33.5606 7.18929 33.5606 7.74157V18.7753Z"
                            fill="white"
                        />
                        <path
                            d="M54.6285 6.51685C53.5715 6.51685 52.6695 6.78012 51.896 7.3517C51.3429 7.7604 50.5058 7.73059 49.9607 7.31138C49.2753 6.78436 48.4389 6.51685 47.4592 6.51685C46.3412 6.51685 45.4329 6.77991 44.6357 7.40664C44.3698 7.61568 43.9297 7.44431 43.9297 7.10608C43.9297 6.90477 43.7665 6.74157 43.5652 6.74157H41.4002C40.848 6.74157 40.4002 7.18929 40.4002 7.74157V18.7753C40.4002 19.3276 40.848 19.7753 41.4002 19.7753H42.9297C43.482 19.7753 43.9297 19.3276 43.9297 18.7753V13.0337C43.9297 10.5056 45.336 9.88764 46.246 9.88764C47.2111 9.88764 48.3416 10.3652 48.3416 12.5843V18.7753C48.3416 19.3276 48.7893 19.7753 49.3416 19.7753H50.8711C51.4234 19.7753 51.8711 19.3276 51.8711 18.7753V13.0337C51.8711 10.5056 53.1946 9.88764 54.077 9.88764C55.0421 9.88764 56.283 10.3652 56.283 12.5843V18.7753C56.283 19.3276 56.7307 19.7753 57.283 19.7753H58.8124C59.3647 19.7753 59.8124 19.3276 59.8124 18.7753V12.5843C59.8124 8.37079 57.6341 6.51685 54.6285 6.51685Z"
                            fill="white"
                        />
                        <path
                            d="M68.9507 16.6292C68.8747 16.6292 68.8005 16.6278 68.7279 16.6248C67.9796 16.5947 67.9171 15.738 68.5539 15.3436L74.1963 11.8494C74.5694 11.6183 74.7547 11.1683 74.6061 10.7554C73.4093 7.42917 70.5231 6.51685 68.8955 6.51685C64.6215 6.51685 62.0296 9.55056 62.0296 13.2584C62.0296 16.9382 64.6767 20 68.8955 20C70.5646 20 72.0332 19.4896 73.3015 18.4862C73.6872 18.181 73.7319 17.6261 73.4472 17.2251L72.7952 16.307C72.4226 15.7823 71.6482 15.7465 71.088 16.0632C70.4335 16.4331 69.6751 16.6292 68.9507 16.6292ZM68.9507 9.88764C69.2575 9.88764 69.5318 9.93725 69.7767 10.0254C70.3622 10.236 70.2528 10.9949 69.7186 11.3138L66.0515 13.503C65.8439 13.6269 65.5591 13.5002 65.5591 13.2584C65.5591 11.4045 66.9653 9.88764 68.9507 9.88764Z"
                            fill="white"
                        />
                        <path
                            d="M86.5607 15.7303C84.7408 15.7303 83.3621 14.2978 83.3621 12.5843C83.3621 10.8708 84.7408 9.4382 86.5607 9.4382C87.1144 9.4382 87.6253 9.56931 88.0788 9.8169C88.6442 10.1255 89.4129 10.1255 89.8001 9.61075L90.8071 8.27213C91.0953 7.88912 91.0761 7.34898 90.715 7.03375C89.496 5.96944 87.9686 5.39326 86.3401 5.39326C81.7352 5.39326 78.9502 8.59551 78.9502 12.5843C78.9502 16.573 81.7352 19.7753 86.3401 19.7753C87.9686 19.7753 89.496 19.1991 90.715 18.1348C91.0761 17.8196 91.0953 17.2794 90.8071 16.8964L89.8001 15.5578C89.4129 15.043 88.6442 15.043 88.0788 15.3516C87.6253 15.5992 87.1144 15.7303 86.5607 15.7303Z"
                            fill="#DCD9F7"
                        />
                        <path
                            d="M100.561 5.39326C96.066 5.39326 93.0604 8.59551 93.0604 12.5843C93.0604 16.573 96.1488 19.7753 100.561 19.7753C104.807 19.7753 108.061 16.573 108.061 12.5843C108.061 8.59551 104.752 5.39326 100.561 5.39326ZM100.561 15.7303C98.8786 15.7303 97.4723 14.2978 97.4723 12.5843C97.4723 10.8708 98.8786 9.4382 100.561 9.4382C102.243 9.4382 103.649 10.8708 103.649 12.5843C103.649 14.2978 102.243 15.7303 100.561 15.7303Z"
                            fill="#F2C94C"
                        />
                        <path
                            d="M115.131 6.8427C115.131 6.29041 114.683 5.8427 114.131 5.8427H111.719C111.167 5.8427 110.719 6.29041 110.719 6.8427V18.3258C110.719 18.8781 111.167 19.3258 111.719 19.3258H114.131C114.683 19.3258 115.131 18.8781 115.131 18.3258V14.3539C115.131 12.1348 116.261 10.7022 117.557 10.3371C117.928 10.2329 118.293 10.171 118.663 10.1597C119.331 10.1394 119.984 9.66674 119.984 8.99851V6.47469C119.984 5.89161 119.485 5.42411 118.911 5.52776C117.05 5.86387 115.902 6.69947 115.131 8.3427V6.8427Z"
                            fill="#DCD9F7"
                        />
                        <path
                            d="M128.748 15.8427C128.103 15.8427 128.032 15.1573 128.583 14.8215L134.586 11.1607C134.953 10.9371 135.141 10.501 135.015 10.0904C133.821 6.19781 130.713 5.39326 128.913 5.39326C124.308 5.39326 121.523 8.59551 121.523 12.5843C121.523 16.573 124.308 19.7753 128.913 19.7753C130.729 19.7753 132.323 19.2 133.661 18.1372C134.054 17.825 134.092 17.2562 133.79 16.8551L132.73 15.4464C132.371 14.969 131.676 14.9193 131.155 15.2125C130.465 15.6013 129.638 15.8427 128.748 15.8427ZM128.913 9.32584C129.17 9.32584 129.393 9.36917 129.585 9.44089C130.102 9.63369 129.966 10.2878 129.494 10.5741L127.063 12.0513C126.45 12.4236 125.66 12.021 125.892 11.3424C126.319 10.0924 127.548 9.32584 128.913 9.32584Z"
                            fill="#DCD9F7"
                        />
                        <circle cx="35.1998" cy="2.4" r="2.4" fill="#EDD68D" />
                    </g>
                    <defs>
                        <filter id="filter0_d_3571_5637" x="0" y="0" width="139.054" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3571_5637" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3571_5637" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}
