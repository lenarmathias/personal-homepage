import {
    FooterContainer,
    IconsContainer,
    GitHubIconLink,
    LinkedInIconLink
} from "./styled";
import { SmallBoldText, ListText } from "../../common/textStyles/styled";
import { BigLinkAddress } from "../../common/linkStyles/styled";

const Footer = () => (
    <FooterContainer>
        <SmallBoldText footer>
            Let’s talk!
        </SmallBoldText>
        <BigLinkAddress
            href="mailto:lenarmathias@gmail.com"
        >
            lenarmathias@gmail.com
        </BigLinkAddress>
        <ListText
            footer
            as="p"
        >
            I’m always open to new projects.
            If you have a website, dashboard or
            mobile app in mind and need some help
            to make your ideas come to life,
            feel free to contact me!
        </ListText>
        <IconsContainer>
            <a
                href="https://github.com/lenarmathias"
            >
                <GitHubIconLink />
            </a>
            <a
                href="https://www.linkedin.com/in/maciej-lenartowicz-969623292/"
            >
                <LinkedInIconLink />
            </a>
        </IconsContainer>
    </FooterContainer>
);

export default Footer;