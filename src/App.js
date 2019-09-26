import React from "react";
import Toolbar from "./Toolbar";
import Portfolio from "./Portfolio";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.filters = props.filters;
    this.projects = props.projects;
    this.state = { selected: "All" };
  }
  updateSelected(filter) {
    this.setState({ selected: filter });
  }
  render() {
    console.log(this.state.selected);
    return (
      <div>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.updateSelected.bind(this)}
        />
        <Portfolio
          projects={
            this.state.selected === "All"
              ? this.projects
              : this.projects.filter(
                  (project) => project.category === this.state.selected
                )
          }
        />
      </div>
    );
  }
}
