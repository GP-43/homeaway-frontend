import React, {useState} from 'react';
import LargeImage from './LargeImage';
import SingleImage from "./SingleImage";


function ImageGallery() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    //  toggle shown state
    setIsShown(current => !current);

    //  or simply set it to true
    // setIsShown(true);
  };
  return (
    <div className='d-flex'>
      <div className="image-scroll-box">
        <button onClick={handleClick}><SingleImage/></button>
        <button onClick={handleClick}><SingleImage/></button>
        <button onClick={handleClick}><SingleImage/></button>
        <button onClick={handleClick}><SingleImage/></button>
        <button onClick={handleClick}><SingleImage/></button>
        <button onClick={handleClick}><SingleImage/></button>
        
      </div>
      {isShown && 
        <div>
          <LargeImage/>
        </div> 

      }
      
      
    </div>
  )
}

export default ImageGallery
