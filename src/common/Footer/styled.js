import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;
`;

export const LetsTalk = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: initial;
  margin: 0;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.color.black};
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  }
`;

export const FooterContent = styled.p`
  max-width: 670px;
  font-size: 18px;
  line-height: 1.4;
  margin: 0;
  color: ${({ theme }) => theme.color.black};
`;

export const SocialList = styled.ul`
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;
`;

export const SocialList_Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const SocialList_Item_Link = styled.a`
  color: ${({ theme }) => theme.color.black};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  }
`;

export const iconStyled = (Icon) => styled(Icon)`
  height: auto;
`;