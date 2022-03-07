import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {authItem} from '../../Redux/nameStore/action';
import './Registration.scss';
import { ReactComponent as OpenEye } from '../../images/EyesPassword/openEye.svg';
import { ReactComponent as CloseEye } from '../../images/EyesPassword/closeEye.svg';

export const Registration = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPawsord, setRepeatPawsord] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (password !== repeatPawsord) setError('Пароли не совпадают')
    else setError('')
  }, [password, repeatPawsord]);

  const handleChange = (e:any , setValue:any) => {
    setValue(e.target.value);
  };

  const handleRegistration = () => {
    if (!error) dispatch(authItem({username, email, password}));
  };

  return (
    <div className='page'>
      <div className='login'>
        <span className='header'>Регистрация</span>
        <input className='input' value={username} placeholder='Введите имя' onChange={(e) => handleChange(e, setUsername)}/>
        <input className='input' value={email} placeholder='Введите почту' onChange={(e) => handleChange(e, setEmail)}/>
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
        <div className='inputPassword'>
          <input
            className='input'
            type={showResetPassword ? 'text': 'password'}
            value={repeatPawsord} 
            placeholder='Повторите пароль' 
            onChange={(e) => handleChange(e, setRepeatPawsord)}
          />
          <button 
            className='btn'
            onClick={() => setShowResetPassword(!showResetPassword)}>{showResetPassword ? <CloseEye/> : <OpenEye/>}</button>
        </div>

        <button className='entry registr' onClick={handleRegistration}>Зарегистрироваться</button>
        <span>{error}</span>
        <span className='loginText'>Уже есть аккаунта?</span>
        <Link to='/'>Войти</Link>
      </div>
    </div>
  )
}