import React from 'react'
import userAvatar from "../assets/userAvatar.png";

const ProfileWidget = () => {
    const selectedGeneres = JSON.parse(localStorage.getItem("selectedMovies")) || [];

    const user ={
        name:"Harsh Rai",
        email:"Harshrai@email",
        username:"Harsh K",
    };
  return ( 
    <div>
        <div>
            <img src ={userAvatar} alt="user Avatar"/>
        </div>
        <div>
            <span>{user?.name}</span>
            <span>{user?.email}</span>
            <span>{user?.username}</span>

            <div>
                {
                    selectedGeneres?.slice(0,4)?.map((genere,index)=>(
                        <div key={index}>{genere.movie}</div>
                    ))
                }
                </div>
        </div>
    </div>
  )
}

export default ProfileWidget