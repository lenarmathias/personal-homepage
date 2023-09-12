import { PortfolioContainer, PortfolioWrapper, GitHubPortfolioIcon } from "./styled";
import { HeadingText, PrimaryText } from "../../common/textStyles/styled";

const Portfolio = () => (
    <PortfolioContainer>
        <PortfolioWrapper>
            <GitHubPortfolioIcon />
            <HeadingText portfolioHeading>
                Portfolio
            </HeadingText>
            <PrimaryText portfolio>
                My recent projects
            </PrimaryText>
        </PortfolioWrapper>
    </PortfolioContainer>
);

export default Portfolio;