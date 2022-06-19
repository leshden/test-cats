import {CardContainer} from './CardStyled';
import CardBack from '../card-back/CardBack';
import CardFooter from '../card-footer/CardFooter';

const Card = () => {
  return (
    <CardContainer>
      <CardBack />
      <CardFooter />
    </CardContainer>
  );
}

export default Card;
