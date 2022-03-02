import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getMeInfo } from '../../Redux/nameStore/action';
import './AccountComponent.scss'

export const AccountComponent = () => {
  const dispatch = useDispatch();
  const [parametrs, setParametrs] = useState();
  const data = useSelector((state:any) => state.accountParametrs);

  useEffect(() => {
    dispatch(getMeInfo())
  }, [])  

  return (
    <div className="root">
      <div className="header">Account</div>
      <div className="body">
        {
          data.keys.map((item:string, index:number) => {
            return(
              <div className="item">
                <span className="key">{item}</span>
                <span className="value">{!!data.values[index] ? data.values[index] : '""'}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}