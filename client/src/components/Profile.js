import React from 'react';

const Profile = (props) => (
  <div className="peachFont peachpFont peachp peachpPosition">
    <h4 className="peachpFont">Profile</h4>
    {/* TODO: include conditional rendering for name if entered */}
    <div className="peachpFont">My name is: <input type="text"></input></div>
    {/* conditional rendering of name to appear here */}
    {/* avatar here */}
    <div className="peachpFont">I am a </div> 
    <button className="peachButton">Girl</button>
    <button className="peachButton">Boy</button>
    <button className="peachButton">Grill</button>
  
  </div>
);

export default Profile;