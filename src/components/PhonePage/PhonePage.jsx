import React, { Component } from 'react';
import Form from 'components/Form';
import ContactsList from 'components/ContactsList/ContactsList';

export default class PhonePage extends Component {
  state = {
    contacts: [],
  };

  handleAddContact = contact =>
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

  render() {
    const { contacts } = this.state;
    const { handleAddContact } = this;

    return (
      <>
        <Form handleAddContact={handleAddContact} />
        <ContactsList contacts={contacts} />
      </>
    );
  }
}
