// create your App component here
import React, { useEffect, useState  } from "react";

function App() {
    const [img,setimg]=useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data=> setimg(data.message))

    },[])
    if (!img) {
        return <p>Loading...</p>
    }
  return (
    <div>
      <p>Here's a lovely dog for you:</p>
      <img src={img} alt="A Random Dog" />
    </div>
  );
}

export default App;
