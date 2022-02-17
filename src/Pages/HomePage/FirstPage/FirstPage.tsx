import bg1 from '@assets/Images/bg-object-1.png';
import bg2 from '@assets/Images/bg-object-2.png';
import bg3 from '@assets/Images/bg-object-3.png';
import bg4 from '@assets/Images/bg-object-4.png';
import bg5 from '@assets/Images/bg-object-5.png';
import logo from '@assets/Images/logo-icon.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import i18n from '../../../i18n/i18n';
import './firstPage.scss';

interface TranslateProps {
    subTitle: string;
    note: string;
}

function FirstPage() {
    const { t } = useTranslation();
    const dataList = t('first', { returnObjects: true }) as TranslateProps;
    const location = useLocation();

    return (
        <div className="first-container">
            <div className="inner-content">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <div className="about">About The Project</div>
                </div>

                {i18n.language === 'ko' ? (
                    <>
                        <div className="first-heading ko">
                            everything <br></br> is in the conceptcube
                        </div>
                        <div className="first-intro">ConceptCube Company Introduction</div>
                    </>
                ) : (
                    <div className="first-heading en"></div>
                )}
            </div>
            <img className="bg-object-1" src={bg1} alt=""></img>
            <img className="bg-object-2" src={bg2} alt=""></img>
            <img className="bg-object-3" src={bg3} alt=""></img>
            <img className="bg-object-4" src={bg4} alt=""></img>
            <img className="bg-object-5" src={bg5} alt=""></img>
        </div>
    );
}

export default FirstPage;
