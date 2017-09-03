import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Using themes: http://www.material-ui.com/#/customization/themes
const ThemedApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
