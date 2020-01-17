import React from 'react';
import {Slide,Caption,Slider} from 'react-materialize';

class MySlider extends React.Component{



render(){

return(
<div>
    
<div className="marqueediv" >
    <div className="AuthDealer" style={{fontSize:'20px',fontWeight:'bolder'}}
    >Authorized Dealer of </div>
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
<Slider>
<Slide image={<img src={require('../Images/GlamGasFull.jpg')} />}>
<Caption>
<h3>
This is our big Tagline!
</h3>
<h5 className="light grey-text text-lighten-3">
Here's our small slogan.
</h5>
</Caption>
</Slide>
<Slide image={<img src={require('../Images/Dominion.jpg')} />}>
<Caption placement="left">
<h3>
Left Aligned Caption
</h3>
<h5 className="light grey-text text-lighten-3">
Here's our small slogan.
</h5>
</Caption>
</Slide>
<Slide image={<img src={require('../Images/GlamGasFull.jpg')} />}>
<Caption placement="right">
<h3>
Right Aligned Caption
</h3>
<h5 className="light grey-text text-lighten-3">
Here's our small slogan.
</h5>
</Caption>
</Slide>
<Slide image={<img src={require('../Images/Dominion.jpg')} />}>
<Caption>
<h3>
This is our big Tagline!
</h3>
<h5 className="light grey-text text-lighten-3">
Here's our small slogan.
</h5>
</Caption>
</Slide>
</Slider>
</div>

)

}


}

export default MySlider;