import styled from "styled-components";
import { Button } from "../Button";
import { ReactComponent as Envelope } from "../../images/message.svg";

export const AboutStyle = styled.div`
  max-width: 1216px;
  height: 384px;
  background: ${({ theme }) => theme.color.whiteLilac};
  margin-bottom: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Selfi = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 66px;
`;

export const SubHeading = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.slateGray};
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const Heading = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0.05em;
  margin: 0;
  color: ${({ theme }) => theme.color.black};
`;

export const Comment = styled.p`
  max-width: 633px;
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 32px 0;
`;

export const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;
  width: 154px;
`;

export const EnvelopeIcon = styled(Envelope)`
  margin-right: 16px;
`;
