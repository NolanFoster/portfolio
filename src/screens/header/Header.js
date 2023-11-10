import React, { useEffect, useState } from "react"
import './header.css'
import Typewriter from "typewriter-effect";



function Header() {
     const [whoami, setWhoAmI] = useState([]);
       useEffect(() => {
        getHeaderData();
     }, [])
     useEffect(() => {
        console.log(whoami)
      }, [whoami]) 
	
const getHeaderData = async () => {
        const request = null;
	try
	{
	   request = await fetch("https://nolanfoster.me/whoami", 
		   { headers: {
    'Access-Control-Allow-Origin': '*'
		   }});
        } catch (error) {
        // TypeError: Failed to fetch
         console.log('There was an error', error);
	const data =  ['A Software Engineer', 'Also known as an', "Back-end developer", "Embedded developer",
                        "Mobile developer", "Or!", "<strong>a coder</strong>"]
       setWhoAmI(data);
		return
    }
	const data = await request.text();
       setWhoAmI(data);
};
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
