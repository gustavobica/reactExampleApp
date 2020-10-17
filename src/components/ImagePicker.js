import React from 'react';
import '../css/ImagePicker.css';

function ImagePicker(props) {
    
    const selector = props.pickImage;
    
    const generateImagePick = (img,selector,alt="option") =>{
        return (<button className='imgSelectionItem' onClick={e => selector("imgs/"+img+".png")}>

                    <picture style={{'width':'100%'}}>
                        <source srcset={'imgs/'+img+'.png' } type="image/png"/> 
                        <img width="100%" alt="pick" src={'imgs/'+img+'.webp' }/>
                    </picture>
                </button>)
    }
  return (
    <div className="gallery" style={{'display': 'flex','flexWrap': 'wrap','marginTop':'20px'}}>
        {generateImagePick('a',selector)}
        {generateImagePick('b',selector)}
        {generateImagePick('c',selector)}
        {generateImagePick('d',selector)}
        {generateImagePick('f',selector)}
        {generateImagePick('g',selector)}
        {generateImagePick('h',selector)}
        {generateImagePick('i',selector)}
        {generateImagePick('j',selector)}
        {generateImagePick('k',selector)}
    </div>
  );
}

export default ImagePicker;