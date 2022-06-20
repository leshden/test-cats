import {CardListContainer} from './CardListStyled';
import Card from '../card/Card';
import data from '../../data/foods.json';

const CardList = () => {

  return (
    <CardListContainer>
      {data.map(({id, first_name, last_name, description, weight}) => {
        const info = {first_name, last_name, description, weight};
        return (
          <Card key={id} info={info} />
        )
      })}

    </CardListContainer>
  );
}

export default CardList;
