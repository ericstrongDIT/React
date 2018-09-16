import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {


  render() {

    //console.log(this.props.projects)

    return (
      <div className="Projects">
        <ul className="list-group">
          <li className="list-group-item active">Projects</li>
          {
            this.props.projects.map(pro =>
              <li className="list-group-item " key={pro.title}>
                {pro.title}:{pro.category}
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default Projects;