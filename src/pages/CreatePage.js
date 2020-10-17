import React, { useState } from 'react';
import ImagePicker from '../components/ImagePicker';
import './CreatePage.css'
function CreatePage(props) {

    const [name, setName] = useState('')
    const [short, setShort] = useState('')
    const [description, setDescription] = useState('')
    const [picture, setPicture] = useState('');
    const [color, setColor] = useState('');
   
    const canSave = (name !== "" && short !== "" && description !== "" && picture !== "") ;

    const pickImage = (imgPath) => {
        setPicture(imgPath);
        window.scrollTo(0, 0);
    }
    let isPlaceHolder = (picture === "");
    const placeholderStyle = {
        'maxHeight':'50%','width':'100%','objectFit':'cover'
    }
    const ImageStyle = {
        'maxHeight':'50%','width':'100%','objectFit':'contain'
    }
    console.log("CreatePage",color);
    var addButton; 
    if (canSave) {
        addButton =  <button className="addButton" onClick={e => props.addOrg({name,short,description,picture,color})}>Add</button>;
      } else {
        addButton =  <button className="addButton empty"  disabled>Add</button>;
      }
    return (
        <div className="container">
            <img src={isPlaceHolder ?  'placeholder.png' : picture} style={isPlaceHolder ? placeholderStyle : ImageStyle} alt="image picked"/>
            {addButton}
            <button className="backButton" onClick={e => props.goBack()}>Back</button>
            <div className="groupInput">
                <label htmlFor="pictureInput">Picture (paste a link to an image)</label>
                <input className="newOrgInput" id="pictureInput" type="text" onChange={event => setPicture(event.target.value)} />
            </div>
            <div className="groupInput">
                <span>Gallery (if you prefer you can pick an image from the gallery)</span>
                <ImagePicker pickImage={pickImage}/>
                
            </div>
            <div className="groupInput">
                <label htmlFor="nameInput">Name</label>
                <input className="newOrgInput" id="nameInput" type="text" onChange={event => setName(event.target.value)} />
            </div>
            <div className="groupInput">
                <label htmlFor="pictureInput">Name Color</label>
                <input className="newOrgInput" id="colorInput" type="color" onChange={event => setColor(event.target.value)} />
            </div>
            <div className="groupInput">
                <label htmlFor="shortInput">Short Description</label>
                <input className="newOrgInput" id="shortInput" type="text"  onChange={event => setShort(event.target.value)} />
            </div>
            <div className="groupInput">
                <label htmlFor="descriptionInput">Description</label>
                <textarea className="newOrgInput" id="descriptionInput" onChange={event => setDescription(event.target.value)} />
            </div>
           
        </div>
    );
}

export default CreatePage;
