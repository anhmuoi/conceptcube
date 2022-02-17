import card1Off from '@assets/Images/off-game-dev-img.png';
import card4Off from '@assets/Images/off-game-mar-img.png';
import card3Off from '@assets/Images/off-si-img.png';
import card2Off from '@assets/Images/off-ui-design-img.png';
import card1On from '@assets/Images/on-game-dev-img.png';
import card4On from '@assets/Images/on-game-mar-img.png';
import card3On from '@assets/Images/on-si-img.png';
import card2On from '@assets/Images/on-ui-design-img.png';
import { useTranslation } from "react-i18next";
import CardThirdPage from "./CardThirdPage";
import "./thirdPage.scss";


const cardList = [
    {
        title: 'Game Development',
        img1: card1Off,
        img2: card1On,
        text: 'VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다.'
    },
    {
        title: 'UI design',
        img1: card2Off,
        img2: card2On,
        text: 'UI/UX, 브랜드/편집/그래픽/산업디자인 및 뉴미디어, 컴퍼니/브랜드/소셜/마케팅 디자인 유지보수 등 넓은 바운더리와 다양한 경험으로 많은 기업들과 브랜드 디자인을 진행하고 있습니다. 고객과 기업의 니즈를 맞추고 조율하여 최상의 결과물을 도출할 수 있게 합니다.'
    },
    {
        title: 'SI',
        img1: card3Off,
        img2: card3On,
        text: '개발 영역은 각 단계를 차근히 밟으며 안정적으로 증명을 거쳐 그 다양성과 안정성을 인정받고 있습니다. 트렌디하면서 안정성있는 개발을 위해 언제나 고민하고 노력하는 개발팀은 기업과의 협업 업무부터 자체 플랫폼 개발 등 다양한 업무 를 진행합니다.'
    },
    {
        title: 'Game Marketing',
        img1: card4Off,
        img2: card4On,
        text: '다양한 사람들이 각자 원하는 문화라는 키워드로 소통하고 나누며 참여하는 것이 얼마나 큰 힘이 되는지, 사람을 이어주는 문화사업이 얼마나 많은 행복을 주는지 알고 있습니다. Concept cube는 뮤직, 세미나 등 다양한 문화 행사를 만들고 함께 나누려 노력합니다.'
    }
]

function PageThree() {
    const { t } = useTranslation();
    const dataList = t('thirdPage', { returnObjects: true }) as any;

    return (
        <div className="page-three">
            <div className="page-three-container">
                {cardList.map((card: any, index) => ( 
                    <div className="card-item">

                        <CardThirdPage  card={card} key={index} />
                    </div>
                ))}
            </div>
           
    
        </div>
    );
}
export default PageThree;