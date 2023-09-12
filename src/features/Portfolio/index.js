import { PortfolioContainer, PortfolioWrapper, GitHubPortfolioIcon } from "./styled";
import { PrimaryText } from "../../common/textStyles/styled";

const Portfolio = () => (
    <PortfolioContainer>
        <PortfolioWrapper>
            <GitHubPortfolioIcon />
            <h2>
                Portfolio
            </h2>
            <PrimaryText portfolio>
                My recent projects
            </PrimaryText>
        </PortfolioWrapper>
    </PortfolioContainer>
);

export default Portfolio;