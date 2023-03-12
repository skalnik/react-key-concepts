import { useState } from 'react';

function EmailForm() {
  const [currentEmail, setEmail] = useState('');
  const [emailValid, setValidity] = useState(true);

  const updateEmail = (event) => {
    setEmail(event.target.value)
  }

  const validateEmail = () => {
    setValidity(currentEmail.includes('@'));
  }

  return (
    <>
      <h1>Your Email</h1>
      <input type="text" id="email" onChange={updateEmail} />
      <button style={{'margin': '10px'}} onClick={validateEmail}>
        Submit
      </button>
      { !emailValid && <p>Invalid email address entered!</p> }
    </>
  )
}

export default EmailForm;
