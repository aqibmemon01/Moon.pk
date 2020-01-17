import React from 'react';
import '../CSS/App.css';
import 'materialize-css/dist/css/materialize.min.css';

class MyPost extends React.Component{

   constructor(props){
    super(props);

   }

   
    render(){
  
        return(
        

<div className="PostDiv" onClick={this.props.MyClick} >
 <img src={this.props.img} className="PostImg" ></img>
    <h6 className="PostTitle">{this.props.Title}</h6>
     <span className="PostPrice" >Price : Rs.{this.props.Price}/-</span><br />  
    <span className="PostPriceC" >Rs.{this.props.BefPrice}/-</span>
    <span style={{color:"red"}}> {this.props.Disc}% off</span>
        </div>       
)
}
}

export default MyPost;