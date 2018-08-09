import React, {
	Component
} from 'react';

import PokeList from './PokeList.js';
import DetailView from './DetailView';
import PokeCell from './PokeCell.js'

import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
      	<PokeList />
      	<DetailView />

      </div>
    );
  }
}

export default App;