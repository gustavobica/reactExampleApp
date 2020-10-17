import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Organization from './pages/Organization';
import CreatePage from './pages/CreatePage';
import * as serviceWorker from './serviceWorker';
import organizationArr from './organizationsArr'

function Root() {


const [view, setView] = useState("list");
const [currentOrg, setcurrentOrg] = useState(0);
const [organizations, setOrganizations] = useState(organizationArr);

  function goToOrg(id){
    setcurrentOrg(id);
    console.log('goToOrg',currentOrg);
    setView('detail');
    window.scrollTo(0, 0);
  }
  function goToCreate(){
    setcurrentOrg(0);
    setView('add');
  }
  function goBack(){
    setcurrentOrg(0);
    setView('list');
    window.scrollTo(0, 0);
  }
  function addOrg(org){
    console.log('addOrg',org);
    org['id'] = organizations.length;
    const newOrg = [org,...organizations];
    
    setOrganizations(newOrg);
    goBack();
  }

  console.log(organizations);
  switch(view){
    case "list":
      console.log("list",organizations);
      return(<Home list={organizations} goToOrg={goToOrg} goToCreate={goToCreate} />)
    break;
    case "add":
        console.log("add");
      return(<CreatePage addOrg={addOrg} goBack={goBack}/>)
    break;
    case "detail":
        console.log("detail");
      return(<Organization organization={organizations.find(o => o.id == currentOrg)} goBack={goBack}/>)
    break;
    default:
      return(<Home list={organizations} goToOrg={goToOrg} goToCreate={goToCreate}/>)
    break;
  }
}
ReactDOM.render(<Root />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
