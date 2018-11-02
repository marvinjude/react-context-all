import React, { Component } from "react";
import ReactDOM from "react-dom";

// create Context
const ThemeContext = React.createContext({
  theme: "Cobalt1",
  changeTheme: theme => console.log(this)
});

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "cobalt2"
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children()}
      </ThemeContext.Provider>
    );
  }
}

class App extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <React.Fragment>
        <Sidebar theme={this.context} />
        {console.log(this.context)}
        <button onClick={() => this.context.changeTheme("x")}>click Me</button>
        <Main />
      </React.Fragment>
    );
  }
}

function Main(props) {
  return <div> Main</div>;
}
function Sidebar(props) {
  return <div>Sidebar </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
