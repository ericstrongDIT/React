import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: 0, name: 'eric', age: '30' }, { id: 1, name: 'laura', age: 28 }]
    };
  }

  clickEvent() {
    var name = 'eric'
    alert('it works!' + name);
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          this is HOME
         <br />
   
         <div>
            {
             
              this.state.items.map(item =>
              
                <div key={item.id}>
                  {item.id} name:{item.name}
                </div>

              )}
          </div>

          <button onClick={this.clickEvent}>Click me</button>
        </div>
      </div>

    );
  }
}

export default Home;