import {CardInfoContainer,
        CardInfoContainerLeft,
        CardInfoContainerRight,
        CardInfoTitle,
        CardInfoFirstName,
        CardInfoSecondName,
        CardInfoDescription,
        CardInfoWeightContainer,
        CardInfoWeight,
        CardInfoWeightText} from './CardInfoStyled';

const CardInfo = () => {
  return (
    <CardInfoContainer>
      <CardInfoContainerLeft />
      <CardInfoContainerRight>
        <CardInfoTitle>
          Сказочное заморское яство
        </CardInfoTitle>
        <CardInfoFirstName>
          Нямушка
        </CardInfoFirstName>
        <CardInfoSecondName>
          с рыбой
        </CardInfoSecondName>
        <CardInfoDescription>
          <div>
            40 порций
          </div>
          <div>
            30 порций
          </div>
        </CardInfoDescription>
      </CardInfoContainerRight>
      <CardInfoWeightContainer>
        <CardInfoWeight>
          0.5
        </CardInfoWeight>
        <CardInfoWeightText>
          кг
        </CardInfoWeightText>
      </CardInfoWeightContainer>
    </CardInfoContainer>
  );
}

export default CardInfo;
