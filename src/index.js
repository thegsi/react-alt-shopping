import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
<MuiThemeProvider muiTheme={getMuiTheme()}>
  <App />
</MuiThemeProvider>, document.getElementById('root'));
