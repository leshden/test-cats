import {CardFooterContainer, CardFooterHref} from './CardFooterStyled';
import {useContext} from 'react';
import {CardContext} from '../../contexts/CardContext';

const CardFooter = ({onClick, isSelected}) => {

  const {info} = useContext(CardContext);
  const {selected_footer_text, last_name, available} = info;

  const DefaultFooter = () => {
    return (
      <p>
        Чего сидишь? Порадуй котэ, <CardFooterHref href='#' onClick={onClick}>купи</CardFooterHref>
      </p>
    );
  }

  const SelectedFooter = () => {
    return (
      <p>
        {selected_footer_text}
      </p>
    )
  }

  const UnavailableFooter = () => {
    return (
      <p style={{color: "#FFFF66"}}>
        Печалька, {last_name} закончился.
      </p>
    )
  }

  return (
    <CardFooterContainer>
      { available ? (isSelected ? <SelectedFooter /> : <DefaultFooter />) : <UnavailableFooter /> }
    </CardFooterContainer>
  );
}

export default CardFooter;
