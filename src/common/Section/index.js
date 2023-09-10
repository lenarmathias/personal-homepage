import { SectionContainer, HeadingWrapper } from "./styled";

const Section = ({ title, content }) => (
    <SectionContainer>
        <HeadingWrapper>
            <h2>
                {title}
            </h2>
        </HeadingWrapper>
        {content}
    </SectionContainer>
);

export default Section;