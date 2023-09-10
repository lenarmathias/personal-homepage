import { useDispatch, useSelector } from "react-redux";
import { selectDarkModeEnabled, changeThemeMode } from "../themeSlice";
import {
    ThemeSwitchButtonWrapper,
    TextSpanWrapper,
    DynamicSwitchWrapper,
    DynamicSwitchFrame,
    DynamicSwitchToggle,
    DynamicThemeIcon
} from "./styled"
import { SmallBoldText } from "../../../common/textStyles/styled";

const ThemeSwitchButton = () => {
    const dispatch = useDispatch();

    const darkModeEnabled = useSelector(selectDarkModeEnabled);

    return (
        <ThemeSwitchButtonWrapper>
            <TextSpanWrapper>
                <SmallBoldText>
                    Dark mode {darkModeEnabled ? "on" : "off"}
                </SmallBoldText>
            </TextSpanWrapper>
            <DynamicSwitchWrapper onClick={() =>
                dispatch(changeThemeMode())
            }>
                <DynamicSwitchFrame />
                <DynamicSwitchToggle
                    togglemove={
                        darkModeEnabled
                            ? 1
                            : 0
                    } />
                <DynamicThemeIcon
                    iconmove={
                        darkModeEnabled
                            ? 1
                            : 0
                    } />
            </DynamicSwitchWrapper>
        </ThemeSwitchButtonWrapper>
    )
};

export default ThemeSwitchButton;