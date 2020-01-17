import React from 'react';
import '../CSS/App.css';
import 'materialize-css/dist/css/materialize.min.css';

class MyCatagori extends React.Component{

   constructor(props){
    super(props);

   }

   
    render(){
      return(
        
<div className="PostDiv" onClick={this.props.clickme} >
 <img src={this.props.img} className="PostImg" ></img>
    <h5 className="PostTitle">{this.props.Title}</h5>
     <span className="PostPrice" >{this.props.Price}</span><br />  
        </div>


        
)

    }
}

export default MyCatagori;