import { useDispatch, useSelector } from "react-redux";
import { selectDarkModeEnabled, changeThemeMode } from "../themeSlice";
import { ThemeSwitchButtonWrapper, TextSpanWrapper, DynamicSwitchFrame } from "./styled"
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
            <DynamicSwitchFrame onClick={() => dispatch(changeThemeMode())} />
        </ThemeSwitchButtonWrapper>
    )
};

export default ThemeSwitchButton;