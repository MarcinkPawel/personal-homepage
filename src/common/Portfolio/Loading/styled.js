import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../../images/spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 88px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.color.whiteLilac};
  color: ${({ theme }) => theme.color.black};
  display: grid;
  justify-items: center;
`;

export const SpinnerStyled = styled(Spinner)`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.color.scienceBlue};
  height: auto;
`;
