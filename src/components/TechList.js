import React, { Component } from 'react';

import TechItem from './TechItem';

export default class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

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
