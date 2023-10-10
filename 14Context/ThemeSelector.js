import { useContext, useEffect } from 'react';
import ThemeContext from './store/theme-context';

export default function ThemeSelector() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <h2>현재 테마: {theme}</h2>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">밝은테마</option>
                <option value="dark">어두운테마</option>
            </select>
        </div>
    );
}
