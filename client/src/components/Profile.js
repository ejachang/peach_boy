import React from 'react';

const Profile = (props) => {
  const { peachAvatar, handleAvatarChange, handleNameSubmit } = props;
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
      <button className="peachButton" id="CHANGE_GIRL" onClick={handleAvatarChange}>Girl</button>
      <button className="peachButton" id="CHANGE_BOY" onClick={handleAvatarChange}>Boy</button>
      <button className="peachButton" id="CHANGE_GRILL" onClick={handleAvatarChange}>Grill</button>  
      <div>
        <img src={ peachAvatar }
          className='peachAvatar'/>
      </div>
    </div>
  );
};

export default Profile;