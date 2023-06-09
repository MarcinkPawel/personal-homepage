import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personalData } from "../../personalData";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../getGitData/gitDataSlice";
import {
  Wrapper,
  Header,
  Icon,
  Heading,
  SubHeading,
  TailsList,
  RepoContainer,
} from "./styled";
import { RepoTile } from "./RepoTile";
import { Loading } from "./Loading";
import { ErrorNotice } from "./Error";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(personalData.githubUsername));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>
        <Icon />
        <Heading>Portfolio</Heading>
        <SubHeading>My recent projects</SubHeading>
      </Header>
      <RepoContainer>
        {(() => {
          switch (repositoriesStatus) {
            case "initial":
              return null;

            case "loading":
              return <Loading />;

            case "error":
              return <ErrorNotice />;

            case "success":
              return (
                <TailsList repositories={repositories}>
                  {repositories.map(
                    ({ id, name, description, homepage, htmlUrl }) => (
                      <RepoTile
                        key={id}
                        name={name}
                        description={description}
                        homepage={homepage}
                        html_url={htmlUrl}
                      />
                    )
                  )}
                </TailsList>
              );

            default:
              throw new Error(`incorrect status: ${repositoriesStatus}`);
          }
        })()}
      </RepoContainer>
    </Wrapper>
  );
};
