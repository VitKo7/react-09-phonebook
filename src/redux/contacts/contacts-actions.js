import { createAction } from '@reduxjs/toolkit';

// get all
const fetchContactsRequest = createAction('contacts/fetch-contacts-request');
const fetchContactsSuccess = createAction('contacts/fetch-contacts-success');
const fetchContactsError = createAction('contacts/fetch-contacts-error');

// create
const addContactRequest = createAction('contacts/add-contact-request');
const addContactSuccess = createAction('contacts/add-contact-success');
const addContactError = createAction('contacts/add-contact-error');

// delete
const deleteContactRequest = createAction('contacts/delete-contact-request');
const deleteContactSuccess = createAction('contacts/delete-contact-success');
const deleteContactError = createAction('contacts/delete-contact-error');

// basic - fron-end action
const handleInput = createAction('contacts/handleInput');

export {
  handleInput,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
