import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserId, getUserUuid } from '../../Redux/nameStore/action';
import { AccountComponent } from '../../components/AccountComponent';
import { OperationsComponent } from '../../components/OperationsComponent';
import { CardsComponent } from '../../components/CardsComponent';
import './Home.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const [nameComponent, setNameComponent] = useState('account')

  useEffect(() => {
    getIds()
  }, []);

  const getIds = async () => {
    await dispatch(getUserId())
    await dispatch(getUserUuid())
  };

  const leave = () => {
    localStorage.clear();
    window.location.pathname = ''
  }

  const renderComponent = () => {
    switch (nameComponent) {
      case 'account': return <AccountComponent/>;
      case 'cards': return <CardsComponent/>;
      case 'operations': return <OperationsComponent/>;
      default: return <div></div>
    }
  }

  if (!localStorage.getItem('access_token')) window.location.pathname = '/'

  return (
    <div className='headerRoot'>
      <div className='header'>
        <div className='accountName'>{localStorage.getItem('name')}</div>
        <div className='buttons'>
          <button className='btn' onClick={() => setNameComponent('account')}>Акаунт</button>
          <button className='btn' onClick={() => setNameComponent('cards')}>Карты</button>
          <button className='btn' onClick={() => setNameComponent('operations')}>Операции</button>
        </div>
      </div>
      <div className='homeContent'>
        {renderComponent()}
      </div>
      <div className='exit'>
        <button className='btn' onClick={leave}>Выйти</button>
      </div>
    </div>
  )
}