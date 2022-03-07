import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getMeInfo, changePassword, changeUsername } from '../../Redux/nameStore/action';
import './AccountComponent.scss'

export const AccountComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:any) => state.accountParametrs);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newPassword, setNewPasword] = useState('');
  const [currentPassword, setCurrentPasword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    dispatch(getMeInfo());
  }, []);

  const changeParams = async (name:string, current_password:string, newValue:string) => {
    switch (name) {
      case 'password': {
        const data = {
          current_password,
          new_password: newValue
        }
        dispatch(changePassword(data))
        return
      }
      case 'username':{
        const data = {
          current_password,
          new_username: newValue
        }
        await dispatch(changeUsername(data));
        dispatch(getMeInfo());
        return
      } 
    }
  }

  return (
    <div className="root">
      <div className="header">Account</div>
      <div className="body">
        <button className="btn changeParamsBtn" onClick={() => setIsOpenModal(!isOpenModal)}>изменить параметры</button>
        {isOpenModal && 
          <div className="changeParamsForm">
            <div className="item">
              <span className="key">current password</span>
              <input className="input" value={currentPassword} onChange={(e) => setCurrentPasword(e.target.value)}/>
            </div>
            <div className="item">
              <span className="key">password</span>
              <input className="input" value={newPassword} onChange={(e) => setNewPasword(e.target.value)}/>
              <button className="btn" onClick={() => changeParams('password', currentPassword, newPassword)}>изменить</button>
            </div>
            <div className="item">
              <span className="key">username</span>
              <input className="input" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <button className="btn" onClick={() => changeParams('username', currentPassword, username)}>изменить</button>
            </div>
          </div>
        }
        {
          data.keys.map((item:string, index:number) => {
            return(
              <div className="item" key={index}>
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