import { useDispatch, useSelector } from "react-redux";
import { selectDarkModeEnabled, changeThemeMode } from "../themeSlice";
import { ReactComponent as SwitchFrame } from "../../../images/elements/themeSwitchButton/switchFrame.svg";
import { ThemeSwitchButtonWrapper, TextSpanWrapper } from "./styled"
import { SmallBoldText } from "../../../common/textStyles/styled";

const ThemeSwitchButton = () => {
    const dispatch = useDispatch();

    const fill = "red";
    const stroke = "blue"

    const darkModeEnabled = useSelector(selectDarkModeEnabled);

    return (
        <ThemeSwitchButtonWrapper>
            <TextSpanWrapper>
                <SmallBoldText>
                    Dark mode {darkModeEnabled ? "on" : "off"}
                </SmallBoldText>
            </TextSpanWrapper>
            <SwitchFrame onClick={() => dispatch(changeThemeMode())}>
                <path
                    id="Vector_2"
                    fill={fill}
                    stroke={stroke}
                />
            </SwitchFrame>
        </ThemeSwitchButtonWrapper>
    )
};

export default ThemeSwitchButton;