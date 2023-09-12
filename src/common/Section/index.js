import { SectionContainer, HeadingWrapper } from "./styled";
import { HeadingText } from "../textStyles/styled";

const Section = ({ title, content }) => (
    <SectionContainer>
        <HeadingWrapper>
            <HeadingText>
                {title}
            </HeadingText>
        </HeadingWrapper>
        {content}
    </SectionContainer>
);

export default Section;