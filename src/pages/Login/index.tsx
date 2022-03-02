import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTokenItem } from '../../Redux/nameStore/action'
import './Login.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e:any , setValue:any) => {
    setValue(e.target.value)
  }

  const handleLogin = () => {
    dispatch(getTokenItem({username, password}))
  }

  return (
    <div className='page'>
      <div className='login'>
        <span>Войти</span>
        <input value={username} placeholder='Введите логин' onChange={(e) => handleChange(e, setUsername)}/>
        <input value={password} placeholder='Введите пароль' onChange={(e) => handleChange(e, setPassword)}/>
        <button onClick={handleLogin}>Войти</button>
        <span>Ещё нет аккаунта?</span>
        <Link to='/registration'>Зарегистрироваться</Link>
      </div>
    </div>
  )
}