import React from 'react';
import OrganizationList from '../components/OrganizationList';
import './Home.css';

function Home(props) {
  console.log()
  return (
    <div className="container">
      <button className="addNewOrg" onClick={e => props.goToCreate()}>Add a new Organization</button>
      <OrganizationList {...props}/>
    </div>
  );
}

export default Home;
