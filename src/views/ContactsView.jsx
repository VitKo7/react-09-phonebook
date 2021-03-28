import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../components/contact-form/ContactForm';
import ContactList from '../components/contact-list/ContactList';
import Filter from '../components/filter/Filter';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import styles from './ContactsView.module.css';

const ContactsView = () => {
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <div className={styles.container}>
      <h2>Phonebook</h2>
      <ContactForm />

      {isLoadingContacts && (
        <div className={styles.loader}>
          <Loader type="ThreeDots" color="green" height={80} width={80} />
        </div>
      )}

      <div className={styles.contacts}>
        <h3 className={styles.contactsTitle}>Contacts</h3>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsView;
