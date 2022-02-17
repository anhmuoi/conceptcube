import { gsap } from 'gsap';
const onLeave = (origin: any, destination: any, direction: any) => {
    switch (destination.index) {
        case 0:
            gsap.from('.inner-content', {
                autoAlpha: 0,
                y: -780,
                duration: 1.2,
                ease: 'power4.out',
            });
            gsap.from('.bg-object-1', {
                autoAlpha: 0,
                y: 900,
                duration: 1.2,
                ease: 'power4.out',
            });
            gsap.from('.bg-object-2', {
                autoAlpha: 0,
                y: -900,
                duration: 1.2,
                ease: 'power4.out',
            });
            gsap.from('.bg-object-3', {
                autoAlpha: 0,
                y: -900,
                duration: 1.2,
                ease: 'power4.out',
            });
            gsap.from('.bg-object-4', {
                autoAlpha: 0,
                y: 900,
                duration: 1.2,
                ease: 'power4.out',
            });
            gsap.from('.bg-object-5', {
                autoAlpha: 0,
                y: 900,
                duration: 1.2,
                ease: 'power4.out',
            });

            gsap.from('.first-intro', {
                autoAlpha: 0,
                x: -780,
                duration: 1.3,
                delay: 0.3,
                ease: 'power4.out',
            });
            break;
        case 1:
            gsap.to('.title-page-one', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            gsap.to('.subTitle', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            gsap.to('.note-page-one', { visibility: 'hidden' });
            gsap.to('.page-three-container', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            gsap.to('.title_fourth', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            gsap.to('.second-img', { visibility: 'hidden', ease: 'power4.out' });
            gsap.to('.second-heading', { visibility: 'hidden', ease: 'power4.out' });
            break;
        case 2:
            gsap.to('.fourth-container', { visibility: 'hidden', duration: 0.5, ease: 'power4.out', delay: 0.5 });
            break;
        case 3:
            gsap.to('.page-three-container', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            gsap.to('.title_fourth', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            gsap.to('.fifth-wrapper', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            gsap.to('.fifth-heading', { visibility: 'hidden', duration: 0.5, ease: 'power4.out' });
            break;
        case 4:
            gsap.to('.fourth-container', { visibility: 'hidden', duration: 0.5, ease: 'power4.out', delay: 0.5 });
            
    }
};
export default onLeave;
