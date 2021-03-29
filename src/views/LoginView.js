import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const updateEmail = evt => {
    setEmail(evt.target.value);
  };

  const updatePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //     this.props.onLogin(this.state);
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
// <div>
//   <h1>Страница логина</h1>

//   <form
//     onSubmit={this.handleSubmit}
//     style={styles.form}
//     autoComplete="off"
//   >
//     <label style={styles.label}>
//       Почта
//       <input
//         type="email"
//         name="email"
//         value={email}
//         onChange={this.handleChange}
//       />
//     </label>

//     <label style={styles.label}>
//       Пароль
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={this.handleChange}
//       />
//     </label>

//     <button type="submit">Войти</button>
//   </form>
// </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
