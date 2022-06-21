import {CardListContainer} from './CardListStyled';
import Card from '../card/Card';
import data from '../../data/foods.json';

const CardList = () => {

  return (
    <CardListContainer>
      {data.map(({id, first_name, last_name, description, weight, selected_footer_text, available}) => {
        const info = {first_name, last_name, description, weight, selected_footer_text, available};
        return (
          <Card key={id} info={info} />
        )
      })}

    </CardListContainer>
  );
}

export default CardList;
