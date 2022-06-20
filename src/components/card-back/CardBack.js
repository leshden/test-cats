import {useState} from 'react';
import CardBackBorder from '../card-back-border/CardBackBorder';
import {CardBackContainer, CardBackCat, CardBackHandlerEvents} from './CardBackStyled';
import CardInfo from '../card-info/CardInfo';
import cat from '../../assets/images/cat.png';

const overCard = () => {
  console.log('Over Card!');
};

const outCard = () => {
  console.log('Exit!');
}

const CardBack = () => {
    const [color, setColor] = useState('#1698D9');

    const handleOverCard = () => {
      setColor('#2EA8E6');
    }

    const handleOutCard = () => {
      setColor('#1698D9');
    }

    return (
        <CardBackBorder color={color}>
          <CardBackContainer>
            <CardBackHandlerEvents onMouseOver={handleOverCard} onMouseOut={handleOutCard} />
            <CardBackCat  src={cat} />
            <CardInfo color={color} />
          </CardBackContainer>
        </CardBackBorder>
    );
}

export default CardBack;
