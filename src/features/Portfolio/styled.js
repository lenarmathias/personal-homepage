import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../images/icons/githubIcon.svg";

export const PortfolioContainer = styled.section`
    margin-top: 72px;
`;

export const PortfolioWrapper = styled.div`
    display: grid;
    place-items: center;
    margin-bottom: 24px;
`;

export const GitHubPortfolioIcon = styled(GitHubIcon)`
    width: 40px;
    margin-bottom: 12px;

    path {
        fill: ${({ theme }) => theme.colors.primaryBlue};
    }
`;