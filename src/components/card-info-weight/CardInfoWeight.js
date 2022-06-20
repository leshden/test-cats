import {CardInfoWeightContainer, CardInfoWeightValue, CardInfoWeightText} from './CardInfoWeightStyled';

const CardInfoWeight = ({weight, color}) => {
  
  return (
    <CardInfoWeightContainer color={color}>
      <CardInfoWeightValue>
        {weight}
      </CardInfoWeightValue>
      <CardInfoWeightText>
        кг
      </CardInfoWeightText>
    </CardInfoWeightContainer>
  );
}

export default  CardInfoWeight;
