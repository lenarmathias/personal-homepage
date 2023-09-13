import { useGithubReposApi } from "./useGithubReposApi"
import {
    ReposListContainer,
    RepoTile,
    RepoTitle,
    RepoLinksWrapper,
    RepoLink
} from "./styled";
import { ListText } from "../../../common/textStyles/styled";

const ReposList = () => {
    const { apiObject: repos } = useGithubReposApi();

    console.log(repos);

    return (
        <ReposListContainer>
            {repos.map(repo => (
                <RepoTile key={repo.id}>
                    <RepoTitle>
                        {repo.name.replace(/-/g, " ")}
                    </RepoTitle>
                    <ListText>
                        {repo.description}
                    </ListText>
                    <RepoLinksWrapper>
                        <ListText demo>
                            Demo:
                        </ListText>
                        <RepoLink
                            demoLink
                            href={repo.homepage}
                            disabled={!repo.homepage}
                        >
                            {
                                !repo.homepage
                                    ? ""
                                    : "Link to project demo"
                            }
                        </RepoLink>
                        <ListText code>
                            Code:
                        </ListText>
                        <RepoLink
                            codeLink
                            href={repo.html_url}
                        >
                            Link to GitHub Repo
                        </RepoLink>
                    </RepoLinksWrapper>
                </RepoTile>
            ))}
        </ReposListContainer>
    )
};

export default ReposList;