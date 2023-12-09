import { useState } from "react";
import './App.css'
import { useEffect } from "react";

function App() {
  const inputvalue = { username: '', email: '', password: '' }
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

    // if (!value.password) {
    //   errors.password = "Password is required!";
    // } else if (value.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters!";
    // } else if (value.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters!";
    // }

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
      (<div className= " message-success"><p>Signed in successfully</p></div>) : (
        // <pre>{JSON.stringify(data, null, 2)}</pre>
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
            placeholder="Username" 
            value={data.username} 
            onChange={handleChange} 
            />
          </div>
          <p>{errors.username}</p>

          <div className="field">
            <label>Last Name  </label> <br />
            <input 
            className="textarea"
            type="text" 
            name="username2" 
            placeholder="Username" 
            value={data.username2} 
            onChange={handleChange} 
            />
          </div>
          <p>{errors.username}</p>


          <div className="field">
            <label>Email    </label> <br />
            <input 
            className="textarea"
            type="text" 
            name="email" 
            placeholder="Email" 
            value={data.email} 
            onChange={handleChange} 
            />
          </div>
          <p>{errors.email}</p>


          {/* <div className="field">
            <label>Password</label>
            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={data.password} 
            onChange={handleChange} 
            />
          </div>
          <p>{errors.password}</p> */}

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
          <p>{errors.contact}</p>

          <button className="button">Submit</button>
        </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default App