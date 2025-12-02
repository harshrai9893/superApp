import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieBox from '../components/MovieBox';
import MovieChip from '../components/MovieChip';


const MOVIES = [
  { id: 1, movie: "Action",color:"#84C2FF" },
  { id: 3, movie: "Drama" },
  { id: 4, movie: "Sci-Fi" },
  { id: 5, movie: "Horror" },
  { id: 6, movie: "Romance" },
  { id: 7, movie: "Thriller" },
  { id: 8, movie: "Animation" },
  { id: 9, movie: "Fantasy" }
];


export default function Selection() {
  const[selectedMovies,setSelectedMovies]=useState([]);
  const navigate = useNavigate();

  const moveNext=()=>{
    if(selectedMovies.length<3){
      alert("please atleast 3 movies");
      return;
    }else{
      localStorage.setItem("selectedMovies",JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate("/info")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}

        <h2 className="text-green-400 font-handwriting text-3xl mb-6">Super app</h2>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            Choose your <br /> entertainment <br /> category
          </h1>
     <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(3,1fr)"
     }}>
        
     {MOVIES.map((category)=>(
      <div key={category.id}>
        <MovieBox
        selectedMovies={selectedMovies}
        setSelectedMovies={setSelectedMovies}
        // selection logic inside it 
        />
      </div>
     ))}
     </div>

 {/* // select min 3 movies ------ */}

     {selectedMovies.length<3 && (
  <p style={{ 
    color:"red"
  }}>
    please select atleast 3 movies
  </p>
)}

{/* to show the selected categories */}
<div>
  {
    selectedMovies.map((movies)=>(
        <div key={movies.id}>
          <MovieChip
          category= {movies}
          setSelectedMovies={setSelectedMovies}
          />
         
        </div>
    ))
  }
</div>
 <button onClick={moveNext}>Next</button>
 </div>
    </div>
  )
}



// create an array of movies
// create a grid of 3x3 each grid cell should be similar dimention
// grid template - reprating 3 times 1fr
// min 3 element should be there
// submit our form




