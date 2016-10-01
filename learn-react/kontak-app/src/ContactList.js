import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <ul>
      {
        this.props.contacts.map(contact => <Contact contact={contact} key={contact.id} {...this.props} />)
      }
      </ul>
    );
  }
}

export default ContactList;
