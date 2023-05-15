import { useContext, useState } from "react"
import GlobalContext from "../../context/GlobalContext"
import { validateChangePassword } from "../../controller/controller";
import './changePassword.css';

const ChangePassword = () => {

  const {user} = useContext(GlobalContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    setErrorMessage("")
    setMessage("")
    const {msg, status} = validateChangePassword(user, oldPassword, newPassword, newPasswordAgain);
    if (status === 1) {
      setErrorMessage("");
      setMessage(msg);
    }
    else {
      setErrorMessage(msg);
    }
  }

  return (
    <div>
      <form>
        <div className="change-password-grid-container">
          <label className="change-password-grid-item" htmlFor="oldPasswordInput">Mật khẩu cũ</label>
          <input className="change-password-grid-item" type="password" id="oldPasswordInput" required placeholder="Mật khẩu cũ" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          <label className="change-password-grid-item" htmlFor="newPasswordInput">Mật khẩu mới</label>
          <input className="change-password-grid-item" type="password" id="newPasswordInput" required min="4" placeholder="Mật khẩu mới" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <label className="change-password-grid-item" htmlFor="oldPasswordAgainInput">Nhập lại mật khẩu mới</label>
          <input className="change-password-grid-item" type="password" id="oldPasswordAgainInput" required placeholder="Nhập lại mật khẩu mới" value={newPasswordAgain} onChange={(e) => setNewPasswordAgain(e.target.value)} />

          {errorMessage ? <>
            <div className="change-password-grid-item"></div>
            <p className="error-message change-password-grid-item">{errorMessage}</p>
          </> : <>
            {message ? <> 
            <div className="change-password-grid-item"></div>
            <p className="success-message change-password-grid-item">{message}</p> 
            </> : null}
          </>}
          
          <div className="change-password-grid-item"></div>
          <div className="change-password-grid-item">
            <div className='change-password-button-container'>
              <button className='change-password-button' onClick={(e) => handleChangePassword(e)}>Đổi mật khẩu</button>
            </div>
          </div>
        </div>
        
        
      </form>
    </div>
  )
}

export default ChangePassword