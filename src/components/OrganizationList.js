import React from 'react';
import OrganizationBox from './OrganizationBox';
import '../css/OrganizationList.css';


function OrganizationList(props) {
    const organizationList = {
        'display':'flex',
        'flexWrap':'wrap',
        'height':'100%'
    }
    console.log("list",props.list);          
    return (
        <div style={organizationList}>
            {props.list.map((organization, i) => {     
                console.log('organization',organization); 
                return (<OrganizationBox key={i} goToOrg={props.goToOrg} index={i} organization={organization} />) 
            })}
        </div>
    );
}

export default OrganizationList;