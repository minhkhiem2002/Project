import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css'

const EmailSent = () => {

  const navigate = useNavigate();
  const resendEmail = () => {
    navigate(0);
  }

  return (
    <>
    <div className="login-2">
      <h1>Gửi email.</h1>
      <p style={{marginTop: "30px", marginBottom: "30px"}}>Nếu email bạn nhập có hiệu lực, bạn sẽ nhận được email gửi đến hộp thư của bạn. Kiểm tra mục <strong>"Spam"</strong> trong email của bạn nếu bạn chưa thấy email.</p>
      <h6>Không nhận được email?</h6>
      <div className="center"><button onClick={() => resendEmail()} className = "button width400px">Gửi lại Email</button></div>
    </div>
    <div className="background-2"
    style = {{backgroundImage: `url(homeBackground.png)`}}>
    </div>
    </>
  )
}

const ForgotPassword = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendEmail = () => {
    console.log("Email sent!");
    setSent(true);
  }
  const resendEmail = () => {
    navigate(0);
  }

  return (
    sent ? (<EmailSent />) : (
      <>
    <div className="login-2">
    <h1>Forgot password</h1>
    <p style={{marginTop: "30px", marginBottom: "30px"}}>Enter your email below. You will receive a email with a link to reset your password.</p>
    
      <form onSubmit={(e) => handleSendEmail(e)}>
      <label htmlFor="emailInput"><b>Email</b></label>
      <input
        required
        type="email"
        id="emailInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className = "input"
      />
      <br/>
      <div className="center"><button type="submit" className = "button width400px">Submit</button></div>
    </form>
  </div>
  <div className="background-2"
  style = {{backgroundImage: `url(homeBackground.png)`}}>
  </div>
  </>
  )

  )
}

export default ForgotPassword
