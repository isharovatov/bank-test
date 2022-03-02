import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Operation } from '../operation'
import { getOperations } from '../../Redux/nameStore/action';


export const OperationsComponent = () => {
  const dispatch = useDispatch()
  const operations = useSelector((state:any) => state.operations)
  console.log(operations);
  

  useEffect(() => {
    dispatch(getOperations())
  }, [])

  return (
    <div>
      {!operations.length && (
        <div>У вас нет совершённых операций</div>
      )}
       {!!operations.length && (
        <>
          {operations.map((item:any, index: number) => (
          <Operation
            from_card={item.from_card}
            to_card={item.to_card}
            amount={item.amount}
            type={item.type}
          />
        ))}
        </>
      )}
      operation
    </div>
  )
}