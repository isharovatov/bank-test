import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTokenItem } from '../../Redux/nameStore/action';
import './Login.scss';
import { ReactComponent as OpenEye } from '../../images/EyesPassword/openEye.svg';
import { ReactComponent as CloseEye } from '../../images/EyesPassword/closeEye.svg';


export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e:any , setValue:any) => {
    setValue(e.target.value);
  };

  const handleLogin = () => {
    dispatch(getTokenItem({username, password}));
  };  

  return (
    <div className='page'>
      <div className='login'>
        <span className='header'>Вход</span>
        <input
          className='input'
          value={username}
          placeholder='Введите логин' 
          onChange={(e) => handleChange(e, setUsername)}
        />
        <div className='inputPassword'>
          <input
            className='input'
            type={showPassword ? 'text': 'password'}
            value={password}
            placeholder='Введите пароль' 
            onChange={(e) => handleChange(e, setPassword)}
          />
          <button 
            className='btn'
            onClick={() => setShowPassword(!showPassword)}>{showPassword ? <CloseEye/> : <OpenEye/>}</button>
        </div>
        
        <button className='entry' onClick={handleLogin}>Войти</button>
        <span className='loginText'>Ещё нет аккаунта?</span>
        <Link to='/registration'>Зарегистрироваться</Link>
      </div>
    </div>
  )
}