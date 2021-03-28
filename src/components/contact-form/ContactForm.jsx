import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const updateName = evt => {
    setName(evt.target.value);
  };

  const [number, setNumber] = useState('');
  const updateNumber = evt => {
    setNumber(evt.target.value);
  };

  const contacts = useSelector(contactsSelectors.getAllContacts());

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    // const { name, number } = this.state;

    const entryCheck = contacts.find(
      contact => contact.name === name || contact.number === number,
    );

    if (entryCheck) {
      alert(
        `Either '${entryCheck.name}' or '${entryCheck.number}' already exists`,
      );
    } else if (name.length === 0 || number.length === 0) {
      alert(`Please, fill in all the fields`);
    } else {
      const contactNew = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(contactNew));
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  // const { name, number } = state;
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.addContactForm}>
        <label className={styles.label}>Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Name Surname"
          className={styles.input}
          onChange={updateName}
          value={name}
        />

        <label className={styles.label}>Number:</label>
        <input
          name="number"
          type="text"
          // type="tel"
          placeholder="123-456"
          // pattern="[0-9]{3}-[0-9]{3}"
          className={styles.input}
          onChange={updateNumber}
          value={number}
        />
        {/* <span className={styles.text}>
            <i>Use this format only:</i> xxx-xxx
          </span> */}

        <button type="submit" className={styles.btnAdd}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
