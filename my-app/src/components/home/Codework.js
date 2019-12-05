import React from "react";



export default function Artwork() {

    function openReactRedux() {
        window.open("https://github.com/BenSolt/React-Redux-App2");
      }


    return(
        <div>
            <h1 className='margintext'>CODE PROJECTS</h1>
            <button class="btn" onClick={openReactRedux}>React Redux</button>
            
        </div>
       
    
           

    )
}