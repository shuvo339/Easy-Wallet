import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', pin: '', mobile: '', email: '' });
  const [showPassword, setShowPassword]= useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form.pin.length!=5){
      toast.error("Password should be 5 characters");
      return;
  }
  if(!/^[0-9]+$/.test(form.pin)){
    toast.error("Password must have in numbers");
    return;
}
    try {
      await axios.post('http://localhost:5000/register', form);
      alert('User registered successfully');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className='w-full md:w-1/3 mx-auto shadow-2xl bg-gray-50'>
    <form onSubmit={handleSubmit} className='flex flex-col  gap-4 mt-6 p-8'>
        <h2 className='text-3xl text-center'>Register form</h2>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
      <input className='input input-bordered' type="text" name="name" placeholder="Name" onChange={handleChange} required />
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
      <input className='input input-bordered' type="email" name="email" placeholder="Email" onChange={handleChange} required />
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
      <input className='input input-bordered' type="number" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Pin Number</span>
          </label>
      <div className='relative'>
      <input className='input input-bordered w-full'  type={showPassword? "text":"password"} name="pin" placeholder="5-digit PIN" onChange={handleChange} required />
      <span className="absolute top-1/3 right-3 text-xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword? <FaEye />:<FaEyeSlash/>}</span>
      </div>
      </div>
      <button className='btn bg-teal-500' type="submit">Register</button>
    </form>
    <p className="py-3 px-6">
    Already have an account? Please{" "}
    <Link className="text-green-900 font-medium underline" to="/login">
      Login
    </Link>
  </p>
  </div>
  );
};

export default Register;
