import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import {authItem} from '../../Redux/nameStore/action';
import './Registration.scss';

export const Registration = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPawsord, setRepeatPawsord] = useState('');

  const handleChange = (e:any , setValue:any) => {
    setValue(e.target.value)
  }

  const handleRegistration = () => {
    dispatch(authItem({username, email, password}))
  }

  return (
    <div className='page'>
      <div className='login'>
        <span>Регистрация</span>
        <input value={username} placeholder='Введите имя' onChange={(e) => handleChange(e, setUsername)}/>
        <input value={email} placeholder='Введите почту' onChange={(e) => handleChange(e, setEmail)}/>
        <input value={password} placeholder='Введите пароль' onChange={(e) => handleChange(e, setPassword)}/>
        <input value={repeatPawsord} placeholder='Повторите пароль' onChange={(e) => handleChange(e, setRepeatPawsord)}/>
        <button onClick={handleRegistration}>Зарегистрироваться</button>
        <span>Уже есть аккаунта?</span>
        <Link to='/'>Войти</Link>
      </div>
    </div>
  )
}