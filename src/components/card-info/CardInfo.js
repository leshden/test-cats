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

const CardInfo = ({color}) => {
  const {info} = useContext(CardContext);
  const {first_name, last_name, description, weight} = info;
  console.log('CardInfo');
  console.log(info);

  return (
    <CardInfoContainer>
      <CardInfoContainerLeft />
      <CardInfoContainerRight>
        <CardInfoTitle>
          Сказочное заморское яство
        </CardInfoTitle>
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
