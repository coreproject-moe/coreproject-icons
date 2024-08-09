import { newSpecPage } from '@stencil/core/testing';
import { CoreprojectLogoDiscord } from '../coreproject-logo-discord';

describe('coreproject-logo-discord', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [CoreprojectLogoDiscord],
            html: `<coreproject-logo-discord></coreproject-logo-discord>`,
        });
        expect(page.root).toEqualHtml(`
      <coreproject-logo-discord>
        <mock:shadow-root>
            <svg fill="none" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.9042 1.99507C24.9092 1.06507 22.7492 0.390069 20.4992 6.89973e-05C20.4795 -0.000561908 20.4598 0.00314022 20.4417 0.0109151C20.4236 0.0186901 20.4073 0.030349 20.3942 0.0450693C20.1242 0.540069 19.8092 1.18507 19.5992 1.68007C17.2127 1.32007 14.7857 1.32007 12.3992 1.68007C12.1892 1.17007 11.8742 0.540069 11.5892 0.0450693C11.5742 0.0150693 11.5292 6.89973e-05 11.4842 6.89973e-05C9.2342 0.390069 7.0892 1.06507 5.0792 1.99507C5.0642 1.99507 5.0492 2.01007 5.0342 2.02507C0.954199 8.13007 -0.170801 14.0701 0.384199 19.9501C0.384199 19.9801 0.399199 20.0101 0.429199 20.0251C3.1292 22.0051 5.7242 23.2051 8.2892 24.0001C8.3342 24.0151 8.3792 24.0001 8.3942 23.9701C8.9942 23.1451 9.5342 22.2751 9.9992 21.3601C10.0292 21.3001 9.9992 21.2401 9.9392 21.2251C9.0842 20.8951 8.2742 20.5051 7.4792 20.0551C7.4192 20.0251 7.4192 19.9351 7.4642 19.8901C7.6292 19.7701 7.7942 19.6351 7.9592 19.5151C7.9892 19.4851 8.0342 19.4851 8.0642 19.5001C13.2242 21.8551 18.7892 21.8551 23.8892 19.5001C23.9192 19.4851 23.9642 19.4851 23.9942 19.5151C24.1592 19.6501 24.3242 19.7701 24.4892 19.9051C24.5492 19.9501 24.5492 20.0401 24.4742 20.0701C23.6942 20.5351 22.8692 20.9101 22.0142 21.2401C21.9542 21.2551 21.9392 21.3301 21.9542 21.3751C22.4342 22.2901 22.9742 23.1601 23.5592 23.9851C23.6042 24.0001 23.6492 24.0151 23.6942 24.0001C26.2742 23.2051 28.8692 22.0051 31.5692 20.0251C31.5992 20.0101 31.6142 19.9801 31.6142 19.9501C32.2742 13.1551 30.5192 7.26007 26.9642 2.02507C26.9492 2.01007 26.9342 1.99507 26.9042 1.99507ZM10.7792 16.3651C9.2342 16.3651 7.9442 14.9401 7.9442 13.1851C7.9442 11.4301 9.2042 10.0051 10.7792 10.0051C12.3692 10.0051 13.6292 11.4451 13.6142 13.1851C13.6142 14.9401 12.3542 16.3651 10.7792 16.3651ZM21.2342 16.3651C19.6892 16.3651 18.3992 14.9401 18.3992 13.1851C18.3992 11.4301 19.6592 10.0051 21.2342 10.0051C22.8242 10.0051 24.0842 11.4451 24.0692 13.1851C24.0692 14.9401 22.8242 16.3651 21.2342 16.3651Z"
                        fill="currentColor"
                    />
                </svg>
        </mock:shadow-root>
      </coreproject-logo-discord>
    `);
    });
});
