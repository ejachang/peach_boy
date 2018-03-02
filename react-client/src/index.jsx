import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import List from './components/List.jsx';
import Comic from './components/Comic.jsx';
// import fakeDBS from './fakeDropboxStorage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: {
        'boy': null,
        'girl': null,
        'grill': null,
      },
      selected:'girl',
      clicks: 0,
      achievements: [],
    }
  }
  
  render() {
    return (<div>
      <h1 className="peachFont peachTitle peachHeader">son of a peach</h1>
      <h5 className="peachFont peachSubtitler peachHeader">click the peach to free him!</h5>

      <List
        peachClickCount={this.state.clicks}
        achievements={this.state.achievements}
        />
    <Comic/>
    </div>)
  }
};
ReactDOM.render(<App />, document.getElementById('app'));
