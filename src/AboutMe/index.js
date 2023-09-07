import { AboutMeWrapper, ProfilePicture, AboutMeTextWrapper } from "./styled";
import { SmallBoldText, PrimaryText } from "../common/textStyles/styled";
import { LinkButton, LinkButtonText } from "../common/linkStyles/styled";
import { ReactComponent as MailIcon } from "../images/icons/message.svg";

const AboutMe = () => (
    <AboutMeWrapper>
        <ProfilePicture />
        <AboutMeTextWrapper>
            <SmallBoldText>
                This is
            </SmallBoldText>
            <h1>
                Maciej Lenartowicz
            </h1>
            <PrimaryText>
                👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </PrimaryText>
            <LinkButton>
                <MailIcon />
                <LinkButtonText>
                    Hire Me
                </LinkButtonText>
            </LinkButton>
        </AboutMeTextWrapper>
    </AboutMeWrapper>
);

export default AboutMe;