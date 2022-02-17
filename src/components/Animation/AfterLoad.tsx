import { gsap } from 'gsap';

const afterLoad = (origin: any, destination: any, direction: any) => {
    switch (destination.index) {
        case 0:
            // gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            // gsap.to('#fp-nav ul li a.active', { backgroundColor: '#1b0080', duration: 0.1, delay: 0.1 });

            break;
        case 1:
            gsap.from('.second-heading', {
                autoAlpha: 0,
                x: -880,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.1,
            });
            gsap.from('.second-img', {
                autoAlpha: 0,
                x: 1880,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.1,
            });
            // gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            // gsap.to('#fp-nav ul li a.active', { backgroundColor: '#ccee5d', duration: 0.1, delay: 0.1 });

            break;
        case 2:
            gsap.from('.page-three-container', {
                autoAlpha: 0,
                y: -420,
                duration: 0.7,
                ease: 'power4.out',
            });
            // gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            // gsap.to('#fp-nav ul li a.active', { backgroundColor: '#ccee5d', duration: 0.1, delay: 0.1 });

            break;
        case 3:
            gsap.from('.fourth-container', {
                autoAlpha: 0,
            });
            gsap.from('.fourth-title', {
                autoAlpha: 0,
                y: -220,
                duration: 1,
                ease: 'power4.out',
            });
            gsap.from('.list-story', {
                autoAlpha: 0,
                x: -420,
                duration: 1,
                ease: 'power4.out',
                delay: 0.3,
            });
            // gsap.to('#fp-nav ul li a', { backgroundColor: '#1b0080', duration: 0.1, delay: 0.1 });
            // gsap.to('#fp-nav ul li a.active', { backgroundColor: '#663cc5', duration: 0.1, delay: 0.1 });

            break;
        case 4:
            gsap.from('.fifth-wrapper', {
                autoAlpha: 0,
            });
            gsap.from('.fifth-name', {
                autoAlpha: 0,
                x: 420,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out',
            });
            gsap.from('.fifth-contact', {
                autoAlpha: 0,
                y: -220,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out',
                delay: 0.2,
            });
            gsap.from('.fifth-heading', {
                autoAlpha: 0,
                y: -220,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out',
            });
            // gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            // gsap.to('#fp-nav ul li a.active', { backgroundColor: '#ccee5d', duration: 0.1, delay: 0.1 });
            break;
    }
};
export default afterLoad;
