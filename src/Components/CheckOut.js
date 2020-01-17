import React from 'react';
import {connect} from 'react-redux';
import fire from '../Config/fire'
import '../CSS/App.css';

class CheckOut extends React.Component{


componentDidMount(){

fire.database().ref('USER_CART/'+this.props.UserName.photoURL).on('value', (snapshot)=>{       
         this.setState({MyCart:snapshot.val()})
        
        });
    
}



constructor(){
super();
this.state={
    MyCart:'',
    MyOrders:[],
    TotalAmount:0,
    FirstName:'',
    LastName:'',
    Phone1:'',
    Phone2:'',
    Address:'',
    Address2:'',
    Country:'',
    City:'',
} 

this.CONFIRMORDER=this.CONFIRMORDER.bind(this)
}

PickData(e,data){

    if(data=="fname"){
    this.state.FirstName=e.target.value;
  }
  else if(data=="lname"){
    this.state.LastName=e.target.value;
  }
  else if(data=="phone1"){
    this.state.Phone1=e.target.value;
  }
  else if(data=="phone2"){
    this.state.Phone2=e.target.value;
  }
  else if(data=="address1"){
    this.state.Address=e.target.value;
  }
  else if(data=="address2"){
    this.state.Address2=e.target.value;
  }
  else if(data=="country"){
    this.state.Country=e.target.value;
  }
  else if(data=="city"){
    this.state.City=e.target.value;
  }
  }
  


CONFIRMORDER(){

if(this.state.FirstName!='' && this.state.LastName!='' && this.state.Phone1!='' && this.state.Phone2!=''
 && this.state.Address!='' && this.state.Address2!='' && this.state.Country!='' && this.state.City!=''){

var MyDate=(new Date);
var DateMaker = MyDate.getDate()+'/'+MyDate.getMonth()+'/'+MyDate.getFullYear()+','+MyDate.getHours()+':'+MyDate.getMinutes();
    
    this.state.MyOrders.push(
        {  
           UserOrders:[this.state.MyCart],
           UserID:this.props.UserName.photoURL,
           UserName:this.state.FirstName+this.state.LastName,
           UserEmail:this.props.UserName.email,
           UserPhone:this.state.Phone1,
           UserPhone2:this.state.Phone2,
           Address:this.state.Address,
           Address2:this.state.Address2,
           Country:this.state.Country,
           City:this.state.City,
           OrderOn:DateMaker,
           OrderStatus:'Pending...',
           TotalAmount:this.state.TotalAmount
        }
            );
    fire.database().ref('ORDERS/'+this.props.UserName.photoURL).set({
        MyOrders:this.state.MyOrders,
      });

}
else{
  alert("Please Fill All Required Fields")
}

}



render(){
if(this.state.MyCart===''){
return <div>LOAD CAT</div>
}
else{


return(
<div>

<div className="listdiv" >
 {/* IMG DIV */}
 <div className="ChkoutDivOne" >

<div>

  <div>
      Your Billing & Shipping Address
  </div>
  <br />
  <input className="MyInputs" type="text" placeholder="First Name" onChange={(e)=>this.PickData(e,"fname")} />
  <input className="MyInputs" type="text"  placeholder="Last Name" onChange={(e)=>this.PickData(e,"lname")}/>

  <input className="MyInputs" type="text"  placeholder="Phone Number" onChange={(e)=>this.PickData(e,"phone1")}/>
  <input className="MyInputs" type="text"  placeholder="Extra Phone Number" onChange={(e)=>this.PickData(e,"phone2")} />
  <input className="MyInputs Big" type="text"  placeholder="Street Address" onChange={(e)=>this.PickData(e,"address1")} />
  <input className="MyInputs Big" type="text"  placeholder="Apartment, Suite, Unit etc.(Optional)" onChange={(e)=>this.PickData(e,"address2")}/>
  <input className="MyInputs" type="text"  placeholder="Country" onChange={(e)=>this.PickData(e,"country")} />
  <input className="MyInputs" type="text"  placeholder="City" onChange={(e)=>this.PickData(e,"city")} />
<br />

<button onClick={()=>this.CONFIRMORDER()} >I CONFIRM MY ORDER</button>
 
</div>

</div>




{/* START SIDE DIV */}
<div className="ChkoutDivTwo" >

<div>

  <div className="OrderSumm" >
      Your Order Summary
  </div>
  
<table >
  <tr>
<th style={{width:"250px"}} >Product</th>
<th>Quantity</th>
<th>Price</th>
  </tr>
</table>
<div className="ChkOutDetail">
<table >
{
    this.state.MyCart.MyCart.map((CartVal)=>{
        // console.log(CartVal) 
        return(   
        this.props.MyRawData.map((AllVal)=>{
               if(AllVal.ID===CartVal.PostID){
      this.state.TotalAmount=this.state.TotalAmount+(AllVal.Price*CartVal.Quantity);  
       return(
<tr >
    <td style={{width:"280px"}} >
 <span>
 <img style={{height:"60px",width:"60px"}} src={require('../Images/bg-01.jpg')} />
     {AllVal.Item}</span>
    </td>
  <td style={{width:"90px"}}>
      {CartVal.Quantity}
  </td>
      <td>
      {AllVal.Price*CartVal.Quantity}
  </td>
</tr>
        )
        }})
        )})        
}




</table>{console.log(this.state.TotalAmount)}
</div>

<table>

<tr>
<td style={{width:"360px"}} >
    SubTotal
</td>
<td>
    Rs.{this.state.TotalAmount}/-
</td>
    
</tr>

<tr>
<th style={{width:"360px"}} >
    Grand Total
</th>
<th>
    Rs.{this.state.TotalAmount}/-
</th>
    
</tr>

</table>
 
</div>

</div>

</div>

</div>

)
}
}

}

function mapStateToProps(state){
    return({
        UserName:state.MyReducer.UserName,
        MyRawData:state.DataReducer.MyRawData
    })
    }
    
    function mapDispatchToProps(dispatch){
    return({
    
    })
    }
    
    
export default connect(mapStateToProps,mapDispatchToProps)(CheckOut);

