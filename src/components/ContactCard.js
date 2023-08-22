
import React from "react";

import mallik2 from "../images/mallik2.jpg"

const ContactCard = (props)=>{
    // eslint-disable-next-line no-unused-vars
    const {id,name,email} = props.contact;

return (
    <div className="item">
        <img className="ui avatar image" src={mallik2} alt="user" />
                   <div className="content">
                          <div className="header">
                              {name}
                          </div>
                          <div>{email}</div>
                   </div>
                   <i className="trash alternate outline icon" style={{color:"red"}}></i>
            </div>
)

}

export default ContactCard;