import {CardFooterContainer, CardFooterHref} from './CardFooterStyled';

const CardFooter = ({onClick}) => {
  return (
    <CardFooterContainer>
      Чего сидишь? Порадуй котэ, <CardFooterHref href='#' onClick={onClick}>купи</CardFooterHref>
    </CardFooterContainer>
  );
}

export default CardFooter;
