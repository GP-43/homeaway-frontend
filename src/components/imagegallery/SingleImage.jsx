import React from 'react';
import singleimg1 from '../../assets/images/sample_places/sample-place1.jpg';

function singleimage (props){
  return (
    <div>
        <img className="single-image thumbnail" src={props.Src} height="100" width="100" />
    </div>
    
  )
}

export default singleimage