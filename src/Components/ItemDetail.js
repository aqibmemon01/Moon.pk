import React from 'react';
import '../CSS/App.css';
import '../CSS/Item.css';
import 'materialize-css/dist/css/materialize.min.css';
import fire from '../Config/fire'
import {connect} from 'react-redux';

class ItemDetail extends React.Component{

componentDidMount(){
 var MyData = this.props.MyRawData;
 var RecProps =this.props.match.params.PostID;
 MyData.map((val)=>{
 if(val.ID===RecProps){
     this.setState({PostData:val})
 }
});


fire.database().ref('USER_CART/'+this.props.UserName.photoURL).on('value', (snapshot)=>{       
    if(snapshot.val()){
    this.setState({MyCart:snapshot.val().MyCart})
 }  
   });

    
}


constructor(props){
  super(props);

  this.state={
MyCart:[],
PostData:"",
quantity:0
}
this.ADDTOCART=this.ADDTOCART.bind(this);
}

ADDTOCART(){
    if(this.props.UserName==='NO USER'){
        this.props.history.push('/ShopCart')
       }
else{
    this.state.MyCart.push({PostID:this.props.match.params.PostID,Quantity:this.state.quantity});
    fire.database().ref('USER_CART/'+this.props.UserName.photoURL).set({
        MyCart:this.state.MyCart,
      });
}

}

   
render(){

    console.log(this.state.PostData)  
     return(
            <div>
<div className="listdiv" >
<div className='ImgDiv' >
    <img src={this.state.PostData.ImgURL} ></img>
    <div className='Childimg' >
    <img src={this.state.PostData.ImgURL} ></img>
    <img src={this.state.PostData.Img2} ></img>
    <img src={this.state.PostData.Img3} ></img>
    <img src={this.state.PostData.Img4} ></img>
    </div>
</div>

{/* DETAIL DIV */}
<div className="DetailDiv" >

<div className="MyItem" >{this.state.PostData.Item}</div>
<span> By : {this.state.PostData.Brand}</span><br />
<span>Posted By : {this.state.PostData.PostBy}</span><br />
<h6>Item Detail</h6>
<div>
    <ol>
        <li>
        {this.state.PostData.Detail1}
        </li>
        <li>
        {this.state.PostData.Detail2}
        </li>
        <li>
        {this.state.PostData.Detail3}
        </li>
        <li>
        {this.state.PostData.Detail4}
        </li>
        <li>
        {this.state.PostData.Detail5}
        </li>
    </ol>
</div>

<div className="MyPrice" >PRICE : Rs.{this.state.PostData.NetPrice}/-</div>
<div className="MyPastPrice" >Rs.{this.state.PostData.Price}/-</div>

<div className="Quantity"><button onClick={()=>{if(this.state.quantity>0){
this.setState({quantity:this.state.quantity-1})}}
} >-</button>
<div>{this.state.quantity}</div>
<button onClick={()=>this.setState({quantity:this.state.quantity+1})}>+</button></div>

<button className="ADDTOCART" onClick={this.ADDTOCART} >ADD TO CART</button>


</div>

{/* START SIDE DIV */}
<div className="SideDiv" >

<div>

  <div>
      Delivery Method
  </div>
  <p>
 By 

<img src={require('../Images/download.png')} />
 Standard Delivery : 1 ~ 3 Days 
 </p>
</div>
<div>
  <div>
      Return & Exchange
  </div>
<p>RETURN : YES</p>
<p>EXCHANGE : YES</p>
<span>If Item is Not Used Or Fitted & Sealed Condition</span>
</div>
<div>
  <div>
      Shipping Charges
  </div>
<p>IN WHOLE KARACHI : FREE</p>
<p>Other Location Charges As Par Situation</p>
</div>


</div>
</div>

            </div>
        )
    }

}

function mapStateToProps(state){
return({
    UserName:state.MyReducer.UserName,
    MyCategory:state.DataReducer.MyCategories,
    MyData:state.DataReducer.MyData,
    MyRawData:state.DataReducer.MyRawData
})
}

function mapDispatchToProps(dispatch){
return({

})
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail);

