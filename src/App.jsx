import { useState } from "react";
import './App.css'
import { useEffect } from "react";

function App() {
  const inputvalue = { username: '',username2: '', email: '', contact: '' }
  const [data, setData] = useState(inputvalue);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const{name, value} = e.target;
    setData({...data, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    console.log(data);
    setIsSubmit(true);
  }

  useEffect(() => {
 
    if(Object.keys(errors).length === 0 && isSubmit) {
      console.log(data);
    }
  },[errors])
  const validate = (value) => {
    const errors ={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.username) {
      errors.username = "First Name is required!";
    }

    if (!value.username2) {
      errors.username2 = "Last name is required!";
    }

    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!value.contact){
      errors.contact = "Contact number is required";
    } else if (value.contact.length !== 10) {
      errors.contact = "Contact number must be equal to 10 digits";
    } 

    return errors
  }

  return(
    <>
    <div className="container">
      {Object.keys(errors).length === 0 && isSubmit ? 
      (<div className= " message-success"><p>Signed in successfully</p></div>
      ) : (
        <div></div>
      )}


      <form onSubmit={handleSubmit}>
        
        <div className="ui divider">
        <div className="ui form">
          <h1>Login Form</h1>

          <div className="field">
            <label>First Name  </label> <br />
            <input 
            className="textarea"
            type="text" 
            name="username" 
            placeholder="First name" 
            value={data.username} 
            onChange={handleChange} 
            />
          </div>
          <p className="error-text">{errors.username}</p>

          <div className="field">
            <label>Last Name  </label> <br />
            <input 
            className="textarea"
            type="text" 
            name="username2" 
            placeholder="Last name" 
            value={data.username2} 
            onChange={handleChange} 
            />
          </div>
          <p className="error-text">{errors.username2}</p>


          <div className="field">
            <label>Email    </label> <br />
            <input 
            className="textarea"
            type="text" 
            name="email" 
            placeholder="xyz@gmail.com" 
            value={data.email} 
            onChange={handleChange} 
            />
          </div>
          <p className="error-text">{errors.email}</p>

          <div className="field">
            <label>Contact no.  </label> <br />
            <input 
            className="textarea"
            type="number" 
            name="contact" 
            placeholder="XXX XXX XXXX" 
            value={data.contact} 
            onChange={handleChange} 
            />
          </div>
          <p className="error-text">{errors.contact}</p>

          <button className="button">Submit</button>
        </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default App