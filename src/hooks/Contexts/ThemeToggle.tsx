// ThemeToggle.tsx
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;
