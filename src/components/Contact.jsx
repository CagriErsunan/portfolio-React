import React from "react";

function Contact() {
    return (
        <div id="contact">
            <h1 className="expTitle">Contact Me</h1>
            <div className="contactInputs">
               <input type="text" className="smallBox" id="firstN" placeholder="First Name"></input>
               <input type="text" className="smallBox" id="lastN" placeholder="Last Name"></input>
               <input type="text" className="smallBox" id="email" placeholder="E-mail"></input>
               <input type="text" className="smallBox" id="phone" placeholder="Phone"></input>
               <input type="text" className="bigBox" id="subject" placeholder="Subject"></input>
               <input type="text" className="bigBox" id="message" placeholder="Message"></input>
            </div>
            <button name="send" type="submit" id="sendButton">SEND</button>
            <div id="contactLinks"></div>
        </div>    
    );
}

export default Contact;