import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCards } from '../../Redux/nameStore/action';
import './Operation.scss'

export const Operation = ({...props}) => {
  const cards = useSelector((state:any) => state.cards)
  const dispatch = useDispatch()
  const [toName, setToName] = useState('')
  const [toId, setToId] = useState('')
  const [fromName, setFromName] = useState('')
  const [fromId, setFromId] = useState('')

  const getInfoOperation = (toUuid: string, fromUuid: string) => {
    const toCard = cards.filter((item:any) => {
      if (toUuid === item.id) return item
    })
    
    const fromCard = cards.filter((item:any) => {
      if (fromUuid === item.id) return item
    })    

    setToName(toCard[0].name)
    setToId(toCard[0].number)
    setFromName(fromCard[0].name)
    setFromId(fromCard[0].number)
  }

  useEffect(() => {
    dispatch(getCards())
    if (!!cards.length) getInfoOperation(props.from_card, props.to_card)
  }, [cards.length])  

  return (
    <div className="operation">
      <div className="content">
        <div>От кого:</div>
        <div className="params">
          <span>{fromName}</span>
          <span>{fromId}</span>
        </div>
      </div>
      <div className="content">
        <div>Кому:</div>
        <div className="params">
          <span>{toName}</span>
          <span>{toId}</span>
        </div>
      </div>
      <div className="info">
        <div>Тип операции:<span>{props.type}</span></div>
        <div>Сумма:<span>{props.amount}</span></div>
      </div>
      
    </div>
  )

}