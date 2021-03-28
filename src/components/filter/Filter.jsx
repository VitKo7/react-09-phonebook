import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { handleInput } from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  // const [state, setState] = useState({});
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length <= 2) {
      handleInput('');
    }
  }, [contacts.length]);

  return (
    <>
      {contacts.length > 2 && (
        <div className="contactsFilter">
          <p>Find contacts by name:</p>
          <input
            name="filter"
            type="text"
            autoComplete="off"
            className={styles.input}
            onChange={event => dispatch(handleInput(event.target.value))}
            value={filter}
          />
        </div>
      )}
    </>
  );
}

// class Filter extends Component {
//   state = {};

//   componentDidUpdate() {
//     if (this.props.contacts.length <= 2) {
//       this.props.handleInput('');
//     }
//   }

//   render() {
//     const { contacts, filter, handleInput } = this.props;

//     return (
//       <>
//         {contacts.length > 2 && (
//           <div className="contactsFilter">
//             <p>Find contacts by name:</p>
//             <input
//               name="filter"
//               type="text"
//               autoComplete="off"
//               className={styles.input}
//               onChange={event => handleInput(event.target.value)}
//               value={filter}
//             />
//           </div>
//         )}
//       </>
//     );
//   }
// }

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   handleInput: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   filter: contactsSelectors.getFilter(state),
//   contacts: contactsSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = {
//   handleInput,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
