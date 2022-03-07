import { useEffect, useLayoutEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCards, createCard } from '../../Redux/nameStore/action';
import { Card } from "../Card";
import './CardsComponent.scss'

export const CardsComponent = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state:any) => state.cards);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [ccv, setCcv] = useState('000');
  const [number, setNumber] = useState('0000000000000000');
  const [date_expire, serDate_expire] = useState(Date.now());
  const [amount, setAmount] = useState('');
  const [update, setUpdate] = useState(false);

  const handleChange = (e:any , setValue:any) => {
    setValue(e.target.value);
  };
  
  useEffect(() => {
    dispatch(getCards());
  }, []);

  const onCreate = async() => {
    const data = {
      amount,
      name,
      ccv,
      number,
      date_expire,
      account: localStorage.getItem('uuid')
    };
    await dispatch(createCard(data));
    await dispatch(getCards());
    setUpdate(!update);
    setIsOpenModal(false)
  };

  return (
    <div className="rootCards">
      {!cards.length && 
      <div>
        <div>У вас нет активных кард</div>
      </div>
      }
      <button className="btn" onClick={() => {setIsOpenModal(!isOpenModal)}}>{!isOpenModal ? 'создать карту' : 'не создавать'}</button>
      {!!isOpenModal &&
      <div className="createCardForm">
        <input className="input" placeholder="имя карты" onChange={(e) => handleChange(e, setName)} value={name}/>
        <input className="input" placeholder="сумма на карте" onChange={(e) => handleChange(e, setAmount)} value={amount}/> 
        <button className="btn createCardBtn" onClick={onCreate}>Продолжить</button>
      </div>
      }
      {!!cards.length && (
        <>
          {cards.map((item:any, index: number) => (
          <Card 
            name={item.name}
            date_expire={item.date_expire}
            cvv={item.cvv}
            number={item.number}
            amount={item.amount}
            key={index}
          />
        ))}
        </>
      )}
    </div>
  )
}