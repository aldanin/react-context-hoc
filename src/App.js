import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/comps'
import ThemeContext, {themes} from './ThemeContext'

class App extends Component {
    constructor(props) {
        super(props)

        this.state={
            theme : themes.light
        }
    }

    onThemeButtonClick = () => {
        const currentTheme=this.state.theme;

        this.setState({
            theme : currentTheme === themes.light ? themes.dark : themes.light
        })
    }

    render() {
        return (
            <div className="App">
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar onThemeButtonClick={() => this.onThemeButtonClick()}/>
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;


