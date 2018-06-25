import React from "react";

const darkTheme={
    color : 'white',
    backgroundColor : 'grey'
}

const lightTheme={
    color : 'gray',
    backgroundColor : 'white'
}

export const themes={
    dark : darkTheme,
    light : lightTheme
}

const ThemeContext=React.createContext(themes.dark);

export default ThemeContext;

