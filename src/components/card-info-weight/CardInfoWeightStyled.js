import styled from 'styled-components';

export const CardInfoWeightContainer = styled.div`
  position: absolute;
  left: 70%;
  right: 5%;
  top: 75.44%;
  bottom: 8.84%;
  border-radius: 40px;
  background: ${props => props.color};
  display: flex;
  flex-direction: column;
`;

export const CardInfoWeightValue = styled.div`
  font-family: 'Trebuchet MS';
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 22px;

  text-align: center;
  margin-top: 20px;

  color: #FFFFFF;
`;

export const CardInfoWeightText = styled.div`
  font-family: 'Trebuchet MS';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;

  text-align: center;
  margin-top: 5px;

  color: #FFFFFF;
`;
