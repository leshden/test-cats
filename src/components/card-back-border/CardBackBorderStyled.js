import styled from 'styled-components';

export const CardBackBorderContainer = styled.div`
  width: 320px;
  height: 480px;
  background: #1698D9;
  clip-path: polygon(50px 0px, 320px 0px,  320px 480px, 0px 480px, 0px 50px);
  border-radius: 10px;

  &:hover {
    background: #2EA8E6;
  }
`;
