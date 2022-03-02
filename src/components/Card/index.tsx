import { useRef, useState } from 'react'
import './Card.scss'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { creatOperations, getCards } from '../../Redux/nameStore/action'

const options = ['invoice', 'transfer', 'letter_of_credit']

const Menu = ({...props}) => {
  const dispatch= useDispatch()
  const [type, setType] = useState('')
  const [toCard, setToCard] = useState('')
  const [amount, setAmount] = useState('')
  const cards = useSelector((state:any) => state.cards)
  

  const handle = (e:any) => {
    if (e?.value) setType(e.value)
  }

  const doRequest = async () => {
    const to_card = cards.filter((item:any) => {
      if (item.number === toCard) return item
    })

    const from_card = cards.filter((item:any) => {
      if (item.number === props.from_card) return item
    })

    const data = {
      type, 
      to_card: to_card[0].id,
      amount, 
      from_card: from_card[0].id
    }    
    await dispatch(creatOperations(data))
    await dispatch(getCards())
  }

  return (
    <div className='menu' id='menu'>
      <span>Совершить операцию</span>
      <Dropdown options={options} onChange={(e) => handle(e)} placeholder="Выберите операцию"/>
      <input value={toCard} onChange={(e) => setToCard(e.target.value)} placeholder='введите номер карты'/>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='введите сумму'/>
      <button onClick={doRequest}>Совершить операцию</button>
    </div>
  )
}

export const Card = ({...props}) => {
  const [isOperation, setIsOperation] = useState(false)  

  return (
    <div className='card' onClick={() => setIsOperation(true)}>
      <div className='header'>{props.name}</div>
      <div className='body'>
        <div className='params'>
          <span>{props.number}</span>
          <span>{props.date_expire.split('-')[0]}/{props.date_expire.split('-')[1]}</span>
        </div>
        <div className='params'>
          <span>{props.amount}</span>
          <span>{props.cvv}</span>
        </div>
      </div>
      {props.number}
      {isOperation && 
        <Menu from_card={props.number}/>
      }
    </div>
  )
}