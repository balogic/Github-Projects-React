import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import Github from './Github'

const Content = () => (
  <div>
    <AppBar title="Github API"/><Github/>
  </div>
)
class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider><Content/></MuiThemeProvider>
      </div>
    )
  }
}
export default App;
