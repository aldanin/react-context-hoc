import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../ThemeContext'
import withTheme from './WithThemeHOC'

function Toolbar(props) {
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components.
    return (
        <div>
            <ThemedButton onClick={() => props.onThemeButtonClick()}/>
        </div>
    );
}

Button.propTypes={
    onThemeButtonClick : PropTypes.func.required,
};

export default Toolbar;

function Button(props) {
    const {theme, onClick}=props;
    return (
        <button
            style={{color : theme.color, backgroundColor : theme.backgroundColor}}
            onClick={() => onClick()}
        >
            click
        </button>
    );
}

Button.propTypes={
    theme : PropTypes.object,
    onClick : PropTypes.func.required,
};

// function ThemedButton(props) {
//     return (
//         <ThemeContext.Consumer>
//             {theme => <Button {...props} theme={theme}/>}
//         </ThemeContext.Consumer>
//     )
//     // return (
//     //     <div>
//     //         <Button theme={props.theme}/>
//     //     </div>
//     // )
// }

const ThemedButton = withTheme(Button);