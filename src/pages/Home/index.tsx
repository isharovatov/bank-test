import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserId, getUserUuid } from '../../Redux/nameStore/action';
import { AccountComponent } from '../../components/AccountComponent';
import { OperationsComponent } from '../../components/OperationsComponent';
import { CardsComponent } from '../../components/CardsComponent';

export const Home = () => {
  const dispatch = useDispatch();
  const [nameComponent, setNameComponent] = useState('account')

  useEffect(() => {
    getIds()
  }, []);

  const getIds = async () => {
    await dispatch(getUserId())
    await dispatch(getUserUuid())
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
    <div>
      <div>{localStorage.getItem('name')}</div>
      <div>
        <button onClick={() => setNameComponent('account')}>Акаунт</button>
        <button onClick={() => setNameComponent('cards')}>Карты</button>
        <button onClick={() => setNameComponent('operations')}>Операции</button>
      </div>
      {renderComponent()}
    </div>
  )
}