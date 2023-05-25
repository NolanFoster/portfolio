import React from 'react'
import './header.css'
import Typewriter from "typewriter-effect";



const getHeaderData = async () => {
  const request = await fetch("https://nolanfoster.me/whoami");
  const data = await request.json();
  console.log(data);
  
  return data.strinify(); // return success object
};

const headerData = async() => await getHeaderData();

function Header() {
    headerData();
     return (
      <div className='main-info'>
        <h1>What am I?</h1>
        <Typewriter
  
          options={{
              strings: ['A Software Engineer', 'Also known as an', "Back-end developer", "Embedded developer", 
                        "Mobile developer", "Or!", "<strong>a coder</strong>"],
              autoStart: true,
              loop: true,
          }}
          
          />
      </div>
    )
 }

  //return (
  //  <div className='main-info'>
  //    <h1>What am I?</h1>
  //    <Typewriter

  //      options={{
  //          strings: ['A Software Engineer', 'Also known as an', "Back-end developer", "Embedded developer", 
  //          "Mobile developer", "Or!", "<strong>a coder</strong>"],
  //          autoStart: true,
  //          loop: true,
  //      }}
        
  //      />
  //  </div>
//  )
//}

export default Header
