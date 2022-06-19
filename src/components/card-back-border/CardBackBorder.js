import {CardBackBorderContainer} from './CardBackBorderStyled';

const CardBackBorder = ({children}) => {
    return (
      <CardBackBorderContainer>
        {children}
      </CardBackBorderContainer>
    );
}

export default CardBackBorder;
