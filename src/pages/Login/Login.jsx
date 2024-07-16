import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({ identifier: '', pin: '' });
  const [showPassword, setShowPassword]= useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', form);
      localStorage.setItem('token', response.data.token);
      navigate('/')
      toast.success('Login successful');
    } catch (error) {
      console.error(error);
      toast.error('Login failed');
    }
  };

  return (
    <div className='shadow-2xl bg-gray-50 w-full md:w-1/3 mx-auto'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-6 p-8'>
       <h2 className='text-3xl text-center'>Login</h2>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email/Mobile Number</span>
          </label>
      <input className='input input-bordered' type="text" name="identifier" placeholder="Email/Mobile Number" onChange={handleChange} required />
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
      <button className='btn bg-teal-500' type="submit">Login</button>
    </form>
    <p className="py-3 px-6 text-center">Do not have any account? Please <Link className="text-red-600 font-medium underline" to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
