import React from 'react';
import '../css/OrganizationBox.css';

function OrganizationBox(props) {
    console.log("OrganizationBox",props);
    const organization = props.organization;
    const color = (organization['color'] && organization['color'] !== "") ? organization['color'] : "black";
    const contentSection = {
        'position':'absolute',
        'left':0,
        'right':0,
        'top':0,
        'bottom':0,
    }
    const titleBox = {
        'borderRadius': '50px',
        'background': 'white',
        'textAlign': 'center',
        'color':color,
        'padding':'10px',
        'position': 'absolute',
        'minWidth': '150px',
        'borderBottomLeftRadius': '0',
        'borderTopLeftRadius': '0'
    }
  return (
    <article className="box" style={{'backgroundImage':`url(${organization['picture']})`,'border': 'solid 2px white'}}>
        <div className="overlay"></div>
        <section style={contentSection}>
            <h5 style={titleBox}>{organization['name']}</h5>
            <div className="bottomContent">
                <details className="detailsBox">
                    <summary className='boxSummary'>Details</summary>
                    <p style={{'textAlign': 'justify'}}>{organization['short']}</p>
                </details>
                <button className='foundOutMore' onClick={e => props.goToOrg(organization['id'])}>Find out More!</button>
            </div>
        </section>
    </article>
  );
}

export default OrganizationBox;