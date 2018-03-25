import React from 'react';

const Profile = (props) => {
  const { peachAvatar } = props;
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
      <button className="peachButton">Girl</button>
      <button className="peachButton">Boy</button>
      <button className="peachButton">Grill</button>  
      <div>
        <img src={ peachAvatar }
          className='peachAvatar'/>
      </div>
    </div>
  );
};

export default Profile;