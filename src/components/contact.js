import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
  return (
      <section id={`contact-${props.index}`} className="contact">
        <img src={props.photo} className="contact-photo" alt={`image for ${props.name}`} />
        <h2 className="contact-name">{props.name}</h2>
        <address className="contact-address">{props.address}</address>
      </section>
  );
}

Contact.defaultProps = {
  text: ''
};