import React, { Component } from 'react';
import ContactList from './ContactList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Wayan Jimmy Gunawan',
          phone: '+63234234242342',
          address: 'Jl. menuju pantai cinta'
        },
        {
          id: 2,
          name: 'Made Dibyo Gunawan',
          phone: '+23949274234',
          address: 'Jl. hutan sangeh'
        },
        {
          id: 3,
          name: 'Nyoman janipa sapta',
          phone: '+23482428402',
          address: 'Jl. menuju negeri tabanan'
        }
      ]
    };
  }
  onDeleteContact = (id, e) => {
    e.preventDefault();
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  }
  render() {
    return (
      <div className="container">
        <div className="cell -12of12">
          <h1 className="title">Kontak</h1>
        </div>
        <div className="cell -12of12">
          <ContactList {...this.state} onDeleteContact={this.onDeleteContact}/>
        </div>
      </div>
    );
  }
}

export default App;
