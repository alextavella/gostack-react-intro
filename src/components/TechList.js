import React, { Component } from 'react';

import TechItem from './TechItem';

export default class TechList extends Component {
  // static.defaultProps = {}

  state = {
    newTech: '',
    techs: []
  };

  // Executed when show on screen
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executed when there are changes on props or state
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executed when exit on screen
  componentWillUnmount() {
  }

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t != tech)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech, index) =>
            <TechItem
              key={index}
              tech={tech}
              onDelete={() => this.handleDelete(tech)} />
          )}
        </ul>
        <h2>{this.state.newTech}</h2>
        <input type="text" onChange={this.handleInputChange} value={this.state.newTech} />
        <button type="submit">Add</button>
      </form>
    );
  }
}
