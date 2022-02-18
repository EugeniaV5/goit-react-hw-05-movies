import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const StyledAddInfo = styled.section`
//   display: flex;

//   &:nth-child() {
//     margin-right: 20px;
//   }

/* &:not(:last-child) {
    margin-right: 20px;
  } */
// `;

export const AddInfoText = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  &:not(:last-child) {
    margin-right: 20px;
  }

  color: #849499;
  border-radius: 5px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #2196f3;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;

export const GoBackBtn = styled(Link)`
  display: block;
  width: fit-content;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ecf0f4;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;
