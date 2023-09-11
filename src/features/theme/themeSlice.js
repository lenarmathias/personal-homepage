import { createSlice } from "@reduxjs/toolkit";
import { getThemeSetupFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkModeEnabled: getThemeSetupFromLocalStorage(),
    },
    reducers: {
        changeThemeMode: state => {
            state.darkModeEnabled = !state.darkModeEnabled;
        },
    },
});

export const { changeThemeMode } = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectDarkModeEnabled = state => selectThemeState(state).darkModeEnabled;

export default themeSlice.reducer;