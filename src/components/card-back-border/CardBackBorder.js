import {CardBackBorderContainer} from './CardBackBorderStyled';

const CardBackBorder = ({children, color}) => {
  
    return (
      <CardBackBorderContainer color={color}>
        {children}
      </CardBackBorderContainer>
    );
}

export default CardBackBorder;
