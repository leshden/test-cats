import CardBackBorder from '../card-back-border/CardBackBorder';
import {CardBackContainer, CardBackCat, CardBackHandlerEvents, CardBackUnavailable} from './CardBackStyled';
import CardInfo from '../card-info/CardInfo';
import cat from '../../assets/images/cat.png';

const CardBack = ({onMouseOver, onMouseOut, onClick, color, isAvailable, getLightPinkColor}) => {

    return (
        <CardBackBorder color={color}>
          <CardBackContainer>
            <CardBackHandlerEvents onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}/>
            { !isAvailable && <CardBackUnavailable />}
            <CardBackCat  src={cat} />
            <CardInfo color={color} getLightPinkColor={getLightPinkColor} />
          </CardBackContainer>
        </CardBackBorder>
    );
}

export default CardBack;
