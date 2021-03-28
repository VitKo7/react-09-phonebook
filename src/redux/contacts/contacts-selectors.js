import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector([getAllContacts, getFilter], (items, filter) => {
  return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
});

const getContacts = state => (state.contacts.items.length > 2 ? getFilteredContacts(state) : state.contacts.items);

export default {
  getLoading,
  getAllContacts,
  getFilter,
  getFilteredContacts,
  getContacts,
};
