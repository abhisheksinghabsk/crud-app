import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6430309cc26d69edc88ce75c.mockapi.io/crud',{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=> {
        navigate('/');
    }).catch((err)=>{
        console.log(err);
      })
  };
  return (
    <div className="row">
      <div className="col-md-4">
      <div className="m-2">
          <Link to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="bg-primary p-4 text-center">
          <h1>Create Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter Age:</label>
            <input
              type="number"
              placeholder="age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter E-mail:</label>
            <input
              type="email"
              placeholder="e-mail"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="d-grid">
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
        </form>
        {/*  */}
        {name}
        <br />
        {age}
        <br />
        {email}
      </div>
    </div>
  );
};

export default Create;
