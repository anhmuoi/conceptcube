import React, { useEffect, useLayoutEffect, useState } from 'react';
import './secondPage.scss';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import img1 from '../../../../Assets/Images/console-img-1.png';
import img2 from '../../../../Assets/Images/console-img-2.png';
import img3 from '../../../../Assets/Images/console-img-3.png';
import img4 from '../../../../Assets/Images/console-img-4.png';
import img5 from '../../../../Assets/Images/console-img-5.png';
import img6 from '../../../../Assets/Images/console-img-6.png';

function SecondPage() {
    const { t, i18n } = useTranslation();
    const dataList = t('second', { returnObjects: true }) as any;
    const location = useLocation();
    
    const [img, setImg] = useState(img1);
    useEffect(() => {
        const imgChange = setInterval(() => {
            if (img === img1) {
                setImg(img2);
            } else if (img === img2) {
                setImg(img3);
            } else if (img === img3) {
                setImg(img4);
            } else if (img === img4) {
                setImg(img5);
            } else if (img === img5) {
                setImg(img6);
            } else if (img === img6) {
                setImg(img1);
            }
        },1000);
        return () => clearInterval(imgChange);
    },[img]);
    return (
        <div className="second-container">
          
                <div className="second-page-text-area">
                    {i18n.language === 'ko' ? (
                        <>
                            <p className='second-heading'>Creative, Fun and- Enjoyable work Impressive</p>
                        </>
                    ) : (
                        <div className="language-en en ">
                           
                        </div>
                    )}
                    <img className='second-img' src={img} alt=''></img>
                </div>
          
        </div>
    );
}

export default SecondPage;
