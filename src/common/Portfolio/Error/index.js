import { ReactComponent as ErrorIcon } from "../../../images/danger.svg";
import { Wrapper, Header, WarningText } from "./styled";
import { myData } from "../../../myData";
import { StyledLink } from "../../StyledLink";

export const ErrorNotice = () => (
  <Wrapper>
    <ErrorIcon />
    <Header>Ooops! Something went wrong... </Header>
    <WarningText>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </WarningText>
    <StyledLink
      href={`https://github.com/${myData.githubUsername}`}
      title="Github Paweł Marcinkowski"
      target="_blank"
      rel="noreferrer noopener"
    >
      Go to Github
    </StyledLink>
  </Wrapper>
);
