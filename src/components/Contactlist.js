import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
    console.log(props);

    const rendercontactlist= props.contacts.map((contact)=>{

        return( 
        <ContactCard contact={contact}></ContactCard>
        )
    })

    return (
        <div>
        <div ui header>
             <h2> contact list </h2>
        </div>
        <div className="ui celled list">
              {rendercontactlist}
        </div>
        </div>
    );

}

export default ContactList;