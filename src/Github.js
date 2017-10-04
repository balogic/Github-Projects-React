import React from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const style1 = {
  height: 200,
  width: 500,
  margin: 50,
  textAlign: 'center'
};

const style2 = {
  height: 200,
  width: 500,
  margin: 50,
  textAlign: 'center'
};

const searchStyle = {
  margin: 20
};

class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      userValue: null,
      progress: 'Results'
    }
    this.update = this.update.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }
  update() {
    console.log('Comes Here');
    console.log(this.state.projects);
    this.setState({progress: 'Fetching....'})
    fetch(`https://api.github.com/users/${this.state.userValue}/repos`).then((response) => response.json()).then((responseJson) => {
      this.setState({projects: responseJson, progress: 'Results'})
    })
  }
  updateValue( e ) {
    this.setState({userValue: (e.target.value)})
  }
  render() {
    console.log('Projects');
    console.log(this.state.projects);
    let projects = this.state.projects;
    return (
      <div>
        <Card style={style1}>
          <CardTitle title="Github" subtitle="Interact with the Github API"/>
          <CardActions><SearchWidget updateValue={this.updateValue} value={this.state.userValue} update={this.update}/></CardActions>
        </Card>
        <Card style={style2}>
          <CardTitle title={this.state.progress} subtitle="Results of the Search"/>
          {/* {
            projects.map(project => <Result project={project.name}/>)
          } */}
          <Result project={projects.length}/>
        </Card>
      </div>
    )
  }
}

const SearchWidget = (props) => (
  <div><TextField onChange={props.updateValue} hintText="Search Projects" id="user-text-box" value={props.value}/><RaisedButton onClick={props.update} style={searchStyle} label="Search"/></div>
)

const Result = (props) => <h3>Total Projects: {props.project}</h3>

export default Github;
