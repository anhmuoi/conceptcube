import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import './fifthPage.scss';

function FifthPage() {
    return (
        <div className="fifth-container">
            <div className="fifth-wrapper">
                <div className="block-item">
                    <h3 className="fifth-name">Partnership.</h3>
                    <div className="email">
                        <a href="mailto:support@taejin.co.kr">
                            <p className="fifth-contact">looc.tzlee@gmail.com</p>
                        </a>
                    </div>
                </div>
                <div className="block-item">
                    <h3 className="fifth-name">Recruiting.</h3>
                    <a href="#">
                        <p className="fifth-contact">looc.tzlee@gmail.com</p>
                    </a>
                </div>
                <div className="block-item">
                    <h3 className="fifth-name">Learn more.</h3>
                    <div className="fifth-contact">
                        <a href="#">
                            <p className="fifth-learn-more">
                                Learn more about us
                                <RightOutlined />
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='fifth-heading'>Let's<br/> Make the world<br></br> Together.</div>
        </div>
    );
}

export default FifthPage;
