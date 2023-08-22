import './App.css';
import Header from './Header';
import AddContact from './AddConatct';
import Contactlist from './Contactlist';
import React,{useState,useEffect} from 'react';
import {uuid} from 'uuidv4'

function App() {
  const LOCAL_STORAGE_KEY= 'contacts';
 
  const [contacts,setcontacts] = useState([]) //intilaized with empty

  const addconatcthandler = (contact)=>{

    setcontacts([...contacts,contact])

  }

  useEffect(() => {
    const contactsListFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     console.log(contactsListFromLocalStorage)
    if (contactsListFromLocalStorage) {
      setcontacts(contactsListFromLocalStorage);
    } else {
      setcontacts([]); // Set an empty array if there's no data in local storage
    }
  },[]);
  

  useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
        console.log(1); //NOTE: When evere we are storing in local storage or in web server we need to store the data only after converting into strings
  },[contacts])
 
  return (
<div className='ui container'>
    <Header/>
   <AddContact addconatcthandler ={addconatcthandler}/>
   <Contactlist contacts={contacts} />
   </div>

   
  );
}

export default App;
