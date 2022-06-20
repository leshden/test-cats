import CardBackBorder from '../card-back-border/CardBackBorder';
import {CardBackContainer, CardBackCat} from './CardBackStyled';
import CardInfo from '../card-info/CardInfo';
import cat from '../../assets/images/cat.png';

const CardBack = () => {
    return (
        <CardBackBorder>
          <CardBackContainer>
            <CardBackCat  src={cat} />
            <CardInfo />
          </CardBackContainer>
        </CardBackBorder>
    );
}

export default CardBack;
