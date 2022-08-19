import React, {useEffect, useState} from 'react';
import './AddEdit.css';
import fireDb from '../firebase';
import {toast} from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
  name:"",
  email:"",
  mobile:"",
}

const AddEdit = () => {

  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const clearForm = () => { //to clear form after submit
    setState({
      name:'',
      email:'',
      mobile:''
    });
  } 

  const {name, email, mobile} = state;

  let navigate = useNavigate(); //initialize navigate (to redirect to home page after submitting form)

  const {id} = useParams();

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({...snapshot.val()});
      } else{
        setData({});
      }
    });
    return () => {
      setData({});
    }
  }, [id]);

  useEffect(() => {
    if(id) {
      setState({...data[id]});
    }
    else{
      setState({...initialState});
    }
    return () => {
      setState({...initialState})
    };
  }, [id, data]);

  //Above useEffect is used to fetch & display data in update form



  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  }; //functionality on inserting input to forms


  const handleSubmit = (e) => {  //functionality on submit
    e.preventDefault(); //stops refreshing the page on submit
    if(!name || !email || !mobile){
      toast.error("Please fill all the required fields");
    } else{
      if (!id){  //insert data into firebase
        fireDb.child("contacts").push(state, (err) => {
          if(err) {
            toast.error(err);
          } else {
            toast.success("Data Added!!");
          }
        });  
      }
      else{ //update data
        fireDb.child(`contacts/${id}`).set(state, (err) => {
          if(err) {
            toast.error(err);
          } else {
            toast.success("Data Updated!!");
          }
        }); 
      }
      clearForm();
      navigate('/');
    }
  };

  return (
    <div style={{marginTop: "100px"}}>
      <form onSubmit={handleSubmit}  style={{margin: "auto", padding: "15px", maxWidth:"400px", alignContent: "center"}} >

        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' placeholder='Enter your name' value={name || ""} onChange={handleInputChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' placeholder='Enter your Email' value={email || ""} onChange={handleInputChange} />

        <label htmlFor="mobile">Mobile</label>
        <input type="number" id='mobile' name='mobile' placeholder='Enter your mobile' value={mobile || ""} onChange={handleInputChange} />

        <input type="submit" value={id ? "Update" : "Save"} />

      </form>
    </div>
  )
}

export default AddEdit