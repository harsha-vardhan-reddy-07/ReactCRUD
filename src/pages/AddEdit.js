import React, {useState} from 'react';
import './AddEdit.css';
import fireDb from '../firebase';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name:"",
  email:"",
  mobile:"",
}



const AddEdit = () => {

  const [state, setState] = useState(initialState);
  //const [data, setData] = useState({});

  const clearForm = () => {
    setState({
      name:'',
      email:'',
      mobile:''
    });
  }

  const {name, email, mobile} = state;

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !mobile){
      toast.error("Please fill all the required fields");
    } else{
      fireDb.child("contacts").push(state, (err) => {
        if(err) {
          toast.error(err);
        } else {
          toast.success("Data Added!!");
        }
      });
      clearForm();
      navigate('/');
    }
  };

  return (
    <div style={{marginTop: "100px"}}>
      <form onSubmit={handleSubmit}  style={{margin: "auto", padding: "15px", maxWidth:"400px", alignContent: "center"}} >

        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' placeholder='Enter your name' value={name} onChange={handleInputChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' placeholder='Enter your Email' value={email} onChange={handleInputChange} />

        <label htmlFor="mobile">Mobile</label>
        <input type="number" id='mobile' name='mobile' placeholder='Enter your mobile' value={mobile} onChange={handleInputChange} />

        <input type="submit" value="Save" />

      </form>
    </div>
  )
}

export default AddEdit