import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCards, createCard } from '../../Redux/nameStore/action';
import { Card } from "../Card";

export const CardsComponent = () => {
  const dispatch = useDispatch()
  const cards = useSelector((state:any) => state.cards)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [name, setName] = useState('')
  const [ccv, setCcv] = useState('')
  const [number, setNumber] = useState('')
  const [date_expire, serDate_expire] = useState('')
  const [amount, setAmount] = useState('')
  const [update, setUpdate] = useState(false)  

  const handleChange = (e:any , setValue:any) => {
    setValue(e.target.value)
  }
  
  useEffect(() => {
    dispatch(getCards())
  }, [])

  const onCreate = async() => {
    const data = {
      amount,
      name,
      ccv,
      number,
      date_expire,
      account: localStorage.getItem('uuid')
    }
    await dispatch(createCard(data))
    await dispatch(getCards())
    setUpdate(!update)
  }

  return (
    <div>
      {!cards.length && 
      <div>
        <div>У вас нет активных кард</div>
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
      {!!isOpenModal &&
      <div>
        <input placeholder="имя карты" onChange={(e) => handleChange(e, setName)} value={name}/>
        <input placeholder="ccv" onChange={(e) => handleChange(e, setCcv)} value={ccv}/>
        <input placeholder="номер карты" onChange={(e) => handleChange(e, setNumber)} value={number}/>
        <input placeholder="дата истечения срока действия" onChange={(e) => handleChange(e, serDate_expire)} value={date_expire}/>
        <input placeholder="сумма на карте" onChange={(e) => handleChange(e, setAmount)} value={amount}/>
        <button onClick={onCreate}>создать карту</button>
      </div>
      }
        <button onClick={() => {setIsOpenModal(true)}}>создать карту</button>
    </div>
  )

}