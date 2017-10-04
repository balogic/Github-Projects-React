import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider><AppBar title="Github API"/></MuiThemeProvider>
      </div>
    )
  }
}
export default App;
