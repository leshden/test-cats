import styled, {css} from 'styled-components';

export const CardBackContainer = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  background: white;
  clip-path: polygon(55px 5px, 315px 5px, 315px 475px, 5px 475px, 5px 55px);
  border-radius: 25px;
`;

export const CardBackCat = styled.img`
  width: 368px;
  height: 360px;
  position: absolute;
  top: 208px; left: -24px;
  z-index: -1;
`;

export const CardBackHandlerEvents = styled.div`
  position: absolute;
  width:100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 2;
`;

export const CardBackUnavailable = styled.div`
  position: absolute;
  width:100%;
  height: 100%;
  background-color: rgba(90, 90, 90, 0.8);
  left: 0px;
  top: 0px;
  z-index: 1;
`;
