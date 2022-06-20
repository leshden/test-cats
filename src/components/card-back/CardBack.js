import {useState, useEffect} from 'react';
import CardBackBorder from '../card-back-border/CardBackBorder';
import {CardBackContainer, CardBackCat, CardBackHandlerEvents, CardBackUnavailable} from './CardBackStyled';
import CardInfo from '../card-info/CardInfo';
import cat from '../../assets/images/cat.png';

const overCard = () => {
  console.log('Over Card!');
};

const outCard = () => {
  console.log('Exit!');
}

const CardBack = () => {
    const BLUE_COLOR = '#1698D9';
    const LIGHT_BLUE_COLOR = '#2EA8E6';
    const PINK_COLOR = '#D91667';
    const LIGHT_PINK_COLOR = '#E52E7A';
    const GRAY_COLOR = '#B3B3B3';

    const [color, setColor] = useState(BLUE_COLOR);
    const [isSelected, setIsSelected] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true);

    useEffect(()=> {
      if (!isAvailable) {
        setColor(GRAY_COLOR);
      }
    }, []);

    const handleOverCard = () => {
      if (!isAvailable){
        return;
      }
      setColor(isSelected ? LIGHT_PINK_COLOR : LIGHT_BLUE_COLOR);
    }

    const handleOutCard = () => {
      if (!isAvailable){
        return;
      }
      setColor(isSelected ? PINK_COLOR : BLUE_COLOR);
    }

    const handleClickCard = () => {
      if (!isAvailable){
        return;
      }
      setColor(!isSelected ? PINK_COLOR : BLUE_COLOR);
      setIsSelected(!isSelected);
    }

    return (
        <CardBackBorder color={color}>
          <CardBackContainer>
            <CardBackHandlerEvents onMouseOver={handleOverCard} onMouseOut={handleOutCard} onClick={handleClickCard}/>
            { !isAvailable && <CardBackUnavailable />}
            <CardBackCat  src={cat} />
            <CardInfo color={color} />
          </CardBackContainer>
        </CardBackBorder>
    );
}

export default CardBack;
