import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = { name: '' };

export default class Form extends Component {
  state = INITIAL_STATE;

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddContact({ ...this.state, id: uuid() });
    this.reset();
  };

  handleInputValue = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    const { name } = this.state;
    const { handleSubmit, handleInputValue } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputValue}
          />
        </label>
        <button type="submit">ADD CONTACT</button>
      </form>
    );
  }
}
