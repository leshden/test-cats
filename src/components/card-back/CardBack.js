import CardBackBorder from '../card-back-border/CardBackBorder';
import {CardBackContainer} from './CardBackStyled';

const CardBack = () => {
    return (
        <CardBackBorder>
          <CardBackContainer>
            CardInfo
          </CardBackContainer>
        </CardBackBorder>
    );
}

export default CardBack;
