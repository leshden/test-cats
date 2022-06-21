import {CardInfoContainer,
        CardInfoContainerLeft,
        CardInfoContainerRight,
        CardInfoTitle,
        CardInfoFirstName,
        CardInfoSecondName,
        CardInfoDescription} from './CardInfoStyled';
import CardInfoWeight from '../card-info-weight/CardInfoWeight';
import {useContext} from 'react';
import {CardContext} from '../../contexts/CardContext';

const CardInfo = ({color, getLightPinkColor}) => {
  const {info} = useContext(CardContext);
  const {first_name, last_name, description, weight} = info;

  const isLightPinkColor = () => color === getLightPinkColor();

  const DefaultTitle = () => {
    return (
      <CardInfoTitle>
        Сказочное заморское яство
      </CardInfoTitle>
    )
  }

  const SelectedHoverTitle = () => {
    return (
      <CardInfoTitle style={{color: "#E52E7A"}}>
        Котэ не одобряет?
      </CardInfoTitle>
    )
  }

  return (
    <CardInfoContainer>
      <CardInfoContainerLeft />
      <CardInfoContainerRight>
        {isLightPinkColor() ? <SelectedHoverTitle /> : <DefaultTitle /> }
        <CardInfoFirstName>
          {first_name}
        </CardInfoFirstName>
        <CardInfoSecondName>
          {last_name}
        </CardInfoSecondName>
        <CardInfoDescription>
          {
            description.map((item, index)=>{
              return(
                <div key={index}>
                  {item}
                </div>
              );
            })
          }
        </CardInfoDescription>
      </CardInfoContainerRight>
      <CardInfoWeight weight={weight} color={color} />
    </CardInfoContainer>
  );
}

export default CardInfo;
