import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const {contact, onDeleteContact} = this.props;
    return (
      <li>
        <h3>{contact.name}</h3>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
        <a className="btn btn-default" onClick={onDeleteContact.bind(null, contact.id)}>Delete</a>
      </li>
    );
  }
}

export default Contact;
