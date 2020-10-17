import React,{ useEffect, useState } from 'react';
import './Organization.css';
function Organization(props) {

    const organization = props.organization;
    const [offset, setOffset] = useState(0)
    useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    }, [])
    const color = (organization['color'] && organization['color'] !== "") ? organization['color'] : "black";
    return (
        <div className="container">
            <button className="backButton" onClick={e => props.goBack()}>Back</button>
            <article style={{'height':'100%'}}>
                <img
                src={organization['picture']}
                alt="Organization"
                className="parallax"
                width='100%'
                height='100%'
                style={{
                    transform: `translateY(${offset * 0.5}px)`,
                    'objectFit':'cover'
                }}
                />
                <div className="scrollDown">
                Scroll Down
                    <img className="arrowDown" alt="arrow Down" src="imgs/white-arrow-down.png"/>
                </div>
                <section className="organizationDescription">
                    <div>
                        <h2 style={{'color':color}}>{organization['name']}</h2> 
                        {organization['description']}
                    </div>
                </section>
            </article>
        </div>
    );
}

export default Organization;
