import React, { useState } from 'react';
import './CardThirdPage.scss';

type Props = {
    card: CardProps;
};
export interface CardProps {
    title: string;
    img1: string;
    img2: string;
    text: string;
}

const CardThirdPage = ({ card }: Props) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div className="card-container" onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
            <p className="card-title">{card.title}</p>
            <img className="card-img" alt="" style={{ backgroundImage: card.img1 }} src={`${hover ? card.img2 : card.img1}`}></img>
            <p className="card-title-hover">{card.title}</p>
            <p className="card-text">{card.text}</p>
        </div>
    );
};

export default CardThirdPage;
