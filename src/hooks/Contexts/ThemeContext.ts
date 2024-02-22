import React from 'react';
interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

// デフォルト値としてdarkModeの状態と、その状態を切り替える関数を設定
const defaultState = {
    darkMode: false,
    toggleDarkMode: () => {},
};

const ThemeContext = React.createContext<ThemeContextType>(defaultState);

export default ThemeContext;
