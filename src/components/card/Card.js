import {CardContainer} from './CardStyled';
import CardBack from '../card-back/CardBack';
import CardFooter from '../card-footer/CardFooter';
import {CardProvider} from '../../contexts/CardContext';

const Card = ({info}) => {
  console.log(info);
  return (
    <CardProvider info={info}>
      <CardContainer>
        <CardBack />
        <CardFooter />
      </CardContainer>
    </CardProvider>
  );
}

export default Card;
