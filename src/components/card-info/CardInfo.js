import {CardInfoContainer,
        CardInfoContainerLeft,
        CardInfoContainerRight,
        CardInfoTitle,
        CardInfoFirstName,
        CardInfoSecondName,
        CardInfoDescription} from './CardInfoStyled';
import CardInfoWeight from '../card-info-weight/CardInfoWeight';

const CardInfo = ({color}) => {
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
      <CardInfoWeight weight={12} color={color} />
    </CardInfoContainer>
  );
}

export default CardInfo;
