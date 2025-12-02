
// chat gpt code is here ------->

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/homeImage.png'


 const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  // Arrow functions assigned to const are fine. You can also use function declarations.
  const handleInput = (e) => {
    const { name, type, value, checked } = e.target;
    setData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
     // no page refresh

     //    checking errors
     // name,username,email,mobile,checkbox
     
     // if no user then alert the user and then store locally
     // clear my data
     // navigate awat from my reg page
    e.preventDefault();

    const newErrors = {};

    if (!data.name || data.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      newErrors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      newErrors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      newErrors.checkbox = "You must accept sharing your data";
    }

    setErrors(newErrors);

    // stop if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // success flow
    alert("Form Submitted Successfully");
    localStorage.setItem("user", JSON.stringify(data));

    // clear form
    setData({
      name: "",
      username: "",
      email: "",
      mobile: "",
      checkbox: false,
    });

    navigate("/selection");
  }

  return (
<div className=" mx-auto h-screen shadow-2xl overflow-hidden  flex items-center justify-center">
{/* Left: home image */}
<div className="w-1/2 relative h-screen hidden md:block">
<img src={homeImage} alt="homeImage" className="object-cover w-full h-full" />
<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
<div className="absolute left-10 bottom-16 max-w text-white">
<p className="text-4xl font-extrabold leading-snug">Discover new things on</p>
<p className="text-4xl font-extrabold mt-2">Superapp</p>
</div>
</div>
      {/* right portion  */}
      <div className="w-full md:w-1/2 bg-[#0b0b0b] p-12 flex flex-col justify-center h-screen">
         <div className="max-w-md mx-auto w-full">
         <h1 className="text-3xl text-green-400 font-Single Day text-center">Super app</h1>
         <p className="text-gray-300 text-center mt-2 mb-8">Create your new account</p>
      <form
        onSubmit={handleSubmit} className="space-y-4"
        
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleInput}
          className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <span className="text-sm text-red-500 mt-1">{errors.name}</span>

        <input
          type="text"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={handleInput}
          className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <span className="text-sm text-red-500 mt-1">{errors.username}</span>

        <input
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleInput}
          className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <span className="text-sm text-red-500 mt-1">{errors.email}</span>

        <input
          type="tel"
          name="mobile"
          placeholder="mobile"
          value={data.mobile}
          onChange={handleInput}
          className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <span className="text-sm text-red-500 mt-1">{errors.mobile}</span>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={data.checkbox}
            onChange={handleInput}
            className='mt-1 h-4 w-4 text-green-500 bg-gray-800 border-gray-700 rounded-full shadow-sm  hover:shadow-lg transition '
          />
          <label htmlFor="checkbox" className='text-gray-300 text-sm'>
            share my registration data with superapp
          </label>
        </div>
        <span className="text-sm text-red-500 mt-1">{errors.checkbox}</span>

        <button type="submit" 
        className='w-full mt-2 bg-green-400 text-black font-semibold py-3 rounded-full'>SIGN UP</button>

        <p className="text-xs text-gray-400 mt-4">
By clicking on Sign up, you agree to Superapp <span className="text-green-400">Terms and Conditions of Use</span>
</p>

<p className="text-xs text-gray-500 mt-2">
To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="text-green-400">Privacy Policy</span>
</p>
      </form>
    </div>
    </div>
    </div>


  );
}

export default Home;


