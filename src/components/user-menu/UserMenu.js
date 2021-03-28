import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername());

  const dispatch = useDispatch();
  const onLogout = dispatch(authOperations.logOut());

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="avatar" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div style={styles.container}>
//     <img src={avatar} alt="avatar" width="32" style={styles.avatar} />
//     <span style={styles.name}>Welcome, {name}</span>
//     <button type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
