import afterLoad from '@components/Animation/AfterLoad';
import onLeave from '@components/Animation/onLeave';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import FifthPage from './FifthPage/FifthPage';
import FirstPage from './FirstPage/FirstPage';
import FourthPage from './FourthPage/FourthPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const fullpageOptions = {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
};

const Home = () => {
    return (
        <ReactFullpage
            licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
            {...fullpageOptions}
            navigation={true}
            navigationPosition={'right'}
            scrollingSpeed={600}
            onLeave={onLeave}
            afterLoad={afterLoad}
            normalScrollElements={'.item-story'}
            render={() => {
                return (
                    <>
                        <div className="section">
                            <FirstPage></FirstPage>
                        </div>
                        <div className="section">
                            <SecondPage></SecondPage>
                        </div>
                        <div className="section">
                            <ThirdPage></ThirdPage>
                        </div>
                        <div className="section">
                            <FourthPage></FourthPage>
                        </div>
                        <div className="section">
                            <FifthPage></FifthPage>
                        </div>
                    </>
                );
            }}
        />
    );
};

export default Home;
