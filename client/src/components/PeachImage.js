import React from 'react';
import { connect } from 'react-redux';

import { updateImage } from '../actions/scoreboardActions';

const PeachImage = (props) => {
  const { peachImages } = props;
  return (
    <div className='peachImageDiv'>
      <img src={ image } className='peachImage' onClick={this.handlePeachClick}/>
      <h5 className="peachFont peachSubtitle">click the peach to free him!</h5>
    </div>
  );
};


export default connect(mapStateToProps)(PeachImage);

