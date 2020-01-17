import React from 'react';
import '../CSS/App.css';
import {Footer} from 'react-materialize';


  class Foooter extends React.Component{  
   constructor(){
     super();    
   }

    render(){
    return (
    <div >
      <div className="marqueediv" >
<marquee>
<img style={{height:'100px',width:'130px',marginLeft:"25px"}} src={require('../Images/Catogari/pak fan.jpg')} />
<img style={{height:'100px',width:'130px',marginLeft:"25px"}} src={require('../Images/Catogari/gfc fan.jpg')} />
<img style={{height:'100px',width:'130px',marginLeft:"25px"}} src={require('../Images/Catogari/royal fan2.png')} />
<img style={{height:'100px',width:'130px',marginLeft:"25px"}} src={require('../Images/Catogari/sk fan.png')} />
<img style={{height:'100px',width:'130px',marginLeft:"25px"}} src={require('../Images/Catogari/parwaz fan.jpg')} />
<img style={{height:'100px',width:'130px',marginLeft:"25px"}} src={require('../Images/Catogari/sonex fan.jpg')} />
<img style={{height:'100px',width:'150px',marginLeft:"25px"}} src={require('../Images/Catogari/glam gas.png')} />
<img style={{height:'100px',width:'130px',marginLeft:"25px"}} src={require('../Images/Catogari/anex.png')} /></marquee>
</div>



<div className="footdiv blue">
      <Footer className="footdiv blue" 
  copyrights="Copyright 2019"
  moreLinks={<a></a>}
  links={<ul>
    <li>
      CEILING FANS
    </li>
    <li>
      BRACKET FANS
    </li>
    <li>
      PADESTAL FANS
    </li>
    <li>
      FALSE CEILING FANS
    </li>
    <li>
      EXHAUST FANS
    </li>
    </ul>}
  className="example"
>
<h5 className="white-text">
Moon.Pk Categories
</h5>
<p className="grey-text text-lighten-4">
<ul>
    <li>
      GFC FANS
    </li>
    <li>
      PAK FANS
    </li>
    <li>
      ROYAL FANS
    </li>
    <li>
      SK FANS
    </li>
    <li>
      PARWAZ FANS
    </li>
    <li>
      SONEX FANS
    </li>
    </ul>
</p>
</Footer> </div>
  </div>
    )
    }
  }
    

export default Foooter;