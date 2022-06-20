import styled from 'styled-components';

export const CardBackBorderContainer = styled.div`
  width: 320px;
  height: 480px;

  clip-path: polygon(50px 0px, 320px 0px,  320px 480px, 0px 480px, 0px 50px);
  border-radius: 10px;

  background: ${props => props.color};


`;
