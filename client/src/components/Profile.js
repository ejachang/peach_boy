import React, {Component} from 'react';
import { connect } from 'react-redux';

import { changeGirl, changeBoy, changeGrill } from '../actions/profileActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
  }

  handleNameSubmit(e) {
    //TODO: fill in
  }

  handleAvatarChange(e) {
    if (e.target.id === 'CHANGE_GIRL') {
      this.props.dispatch( changeGirl() );
    } else if (e.target.id === 'CHANGE_BOY') {
      this.props.dispatch( changeBoy() );
    } else if (e.target.id === 'CHANGE_GRILL') {
      this.props.dispatch( changeGrill() );
    }
  }

  render() {
    let avatar = this.props.avatar;
    // let name = this.props.name;
    return (
      <div className="peachFont peachpFont peachp peachpPosition">
        <h4 className="peachpFont">Profile</h4>
        {/* TODO: include conditional rendering for name if entered */}
        <div className="peachpFont">
          <form>
            <label htmlFor="name">My name is: </label>
            <input type="text"></input>
          </form>
        </div>
        {/* conditional rendering of name to appear here */}
        <div className="peachpFont">I am a </div> 
        <button className="peachButton" id="CHANGE_GIRL" onClick={this.handleAvatarChange}>Girl</button>
        <button className="peachButton" id="CHANGE_BOY" onClick={this.handleAvatarChange}>Boy</button>
        <button className="peachButton" id="CHANGE_GRILL" onClick={this.handleAvatarChange}>Grill</button>  
        <div>
          <img src={ avatar }
            className='peachAvatar'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // console.log('profile state', reduxState);
  return {
    avatar: reduxState.profileReducer.avatar,
    name: reduxState.profileReducer.name
  };
};

// const mapDispatchToProps = (dispatch) => {
  
// };

export default connect(mapStateToProps)(Profile);
