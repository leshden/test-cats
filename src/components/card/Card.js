import {CardContainer} from './CardStyled';
import CardBack from '../card-back/CardBack';
import CardFooter from '../card-footer/CardFooter';
import {CardProvider} from '../../contexts/CardContext';
import {useState, useEffect} from 'react';

const Card = ({info}) => {

  const {available} = info;

  const BLUE_COLOR = '#1698D9';
  const LIGHT_BLUE_COLOR = '#2EA8E6';
  const PINK_COLOR = '#D91667';
  const LIGHT_PINK_COLOR = '#E52E7A';
  const GRAY_COLOR = '#B3B3B3';

  const [color, setColor] = useState(BLUE_COLOR);
  const [isSelected, setIsSelected] = useState(false);
  const [isAvailable, setIsAvailable] = useState(available);

  const getLightPinkColor = () => LIGHT_PINK_COLOR;

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
    <CardProvider info={info}>
      <CardContainer>
        <CardBack onMouseOver={handleOverCard}
                  onMouseOut={handleOutCard}
                  onClick={handleClickCard}
                  isAvailable = {isAvailable}
                  color = {color}
                  getLightPinkColor = {getLightPinkColor}/>
        <CardFooter onClick={handleClickCard} isSelected = {isSelected} />
      </CardContainer>
    </CardProvider>
  );
}

export default Card;
