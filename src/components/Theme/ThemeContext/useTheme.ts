import React from 'react';
import ThemeContext from './ThemeContext';

function useTheme(){
    const themeContext=React.useContext(ThemeContext);
    if(themeContext===undefined)
    {
        throw new Error('useTheme must be within a ThemeProvider');
    }
    return themeContext;
}

export default useTheme;