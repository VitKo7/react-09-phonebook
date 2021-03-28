import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import ContactListItem from '../contact-list-item/ContactListItem';

import popTransition from './transitions/pop.module.css';
// import slideTransition from './transitions/slide.module.css';
import styles from './ContactList.module.css';

const ContactList = () => {
  // const [state, setState] = useState({});
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contactsList">
      {!contacts.length ? (
        <p>There are no contacts here yet ...</p>
      ) : (
        <TransitionGroup component="ul" className={styles.list}>
          {contacts.map(contact => (
            <CSSTransition
              key={contact.id}
              timeout={200}
              classNames={popTransition}
            >
              <li className={styles.contactListItem} key={contact.id}>
                <ContactListItem {...contact} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
};

export default ContactList;
