import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [FormState, setFormState] = useState({
    username: "bosco",
    email: "bosco11jico100@gmail.com",
  });

  const {username,email} = FormState;

  const onInputChange =({target})=>{

    const {name,value} = target;

    setFormState({...FormState,[name]:value})
  }

  useEffect(()=>{
  console.log("email change");
  },[email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username==="bosco1" && <Message/>)
      }
    </>
  );
};
