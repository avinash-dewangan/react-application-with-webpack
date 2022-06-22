import React, { useState } from "react";
import "./App.scss";
const App = () => {
  const person = {
    firstName: "",
    email:""
  };

  const [values, setValues] = useState(person);
  const [errors, setErrors] = useState({});

  const validate =(values)=>{
    let errors={}
    //errors.firstName= !values.firstName?"name is required":""
    const specialChar =/^[0-9!@#\$%\^\&*\)\(+=._-]$/g
    const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    const phoneNoValidator = /^(\9|8|7|6|5)\d{10}$/
    if(!values.firstName){
      errors.firstName="First name is required";
    }else if(specialChar.test(values.firstName)){
      errors.firstName="special character not alloweed"
    }else if(values.firstName<=3){
      errors.firstName="min 3"
    }
    if(!values.email.toLowerCase()
    .match(emailValidator
    )){
      errors.email="not valid"

    }
    

    return errors;
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values))
  };

  return (
    <div>
      <h1 className="heading__one">React application!!!</h1>
      {process.env.NODE_ENV}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        <p>{errors.firstName}</p>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="text"
          name="email"
          value={values.email}
          placeholder="email"
          onChange={handleChange}
        />
        <p>{errors.email}</p>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
