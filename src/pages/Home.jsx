// import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';


//  export const Home = () => {
//     const navigate = useNavigate();

//     const[data,setData] = useState({
//         name:"",
//         username:"",
//         email:"",
//         mobile:"",
//         checkbox:false,

//     });

//     const[errors,setErrors] = useState({
//         name:"",
//         username:"",
//         email:"",
//         mobile:"",
//         checkbox:"",

//     });

//     // why we not use function in place of const
//     const handleInput =(e)=>{
//         setData({
//             ...data,
//             [e.target.name]: e.target.type === "checkbox"? e.target.checked : e.target.value,
//         })

//     }

//     const handleSubmit =(e)=>{
//     // no page refresh

//     //    checking errors
//     // name,username,email,mobile,checkbox

//     // if no user then alert the user and then store locally
//     // clear my data
//     // navigate awat from my reg page

//     e.preventDefault();
//     let errors = {} ;

//     if (!data.name || data.name.trim()===""){
//         errors.name = "Name is required";
//     }
//     if (!data.username || data.username.trim()===""){
//         errors.username = "username is required";
//     }
//     if (!data.email || data.email.trim()===""){
//         errors.email = "email is required";
//     }
//     if (!data.mobile || data.mobile.trim()===""){
//         errors.mobile = "mobile is required";
//     }
//     if (!data.checkbox ){
//         errors.checkbox = "checkbox is required";
//     }
//     setErrors(errors);

//     if(Object.keys(errors).length>0){
//         return;
//     }else{
//         alert("Form Submitted Succesfully");
//         localStorage.setItem("user",JSON.stringify(data));
//         setData({
//             name:"",
//             username:"",
//             email:"",
//             mobile:"",
//             checkbox:false,
//         });
//         navigate("/selection");
//     }

//     }

//   return (
//     <div>
//         <form style={{
//             display:"flex",
//             flexDirection:"column",
//             gap:"20px",
//             width:"40vw",
//             marginLeft:"auto",
//             marginRight:"auto",
//         }}>
//             <input type='text' name='name' placeholder='name' 
//             value={data.name} onChange={handleInput}/>
//             <span style={{color:"red",height:"20px"}}>{errors.name}</span>

//             <input type='text' name='username' placeholder='username' 
//              value={data.username} onChange={handleInput}/>
//             <span style={{color:"red" ,height:"20px"}}>{errors.username}</span>

//             <input type='email' name='email' placeholder='email'
//              value={data.email} onChange={handleInput}/>
//             <span style={{color:"red",height:"20px"}}>{errors.email}</span>

//             <input type='tel' name='mobile' placeholder='mobile'
//              value={data.mobile} onChange={handleInput}/>
//             <span style={{color:"red",height:"20px"}}>{errors.mobile}</span>

//             <div>
//                 <input type='checkbox' name='checkbox' id='checkbox'/>
//                 <label htmlFor='checkbox'>
//                     share my registration data with superapp
//                 </label>
//             </div>

//             <span style={{color:"red",height:"20px"}}>{}</span>
//             <button type='submit' onSubmit={handleSubmit}>submit</button>
//         </form>
//     </div>
//   )
// }

// chat gpt code is here ------->

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
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
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "40vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.name}</span>

        <input
          type="text"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.username}</span>

        <input
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.email}</span>

        <input
          type="tel"
          name="mobile"
          placeholder="mobile"
          value={data.mobile}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.mobile}</span>

        <div>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={data.checkbox}
            onChange={handleInput}
          />
          <label htmlFor="checkbox">
            share my registration data with superapp
          </label>
        </div>
        <span style={{ color: "red", height: "20px" }}>{errors.checkbox}</span>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
