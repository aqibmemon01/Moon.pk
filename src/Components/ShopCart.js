import React from 'react';
import '../CSS/App.css';
import '../CSS/Item.css';
import 'materialize-css/dist/css/materialize.min.css';
import fire from '../Config/fire'
import {connect} from 'react-redux';

class ShopCart extends React.Component{

componentDidMount(){
var CartData;
var UserPromise = new Promise ((res,rej)=>{
    fire.database().ref('USER_CART/'+this.props.UserName.photoURL).on('value', function(snapshot) {       
       CartData=snapshot.val();
       res('clear')    
})
});  
UserPromise.then((val)=>{this.setState({MyCart:CartData})
});

}


constructor(props){

super(props);
this.state={
MyCart:'',
}

this.ClearCart=this.ClearCart.bind(this);
}

ClearCart(){
    fire.database().ref('USER_CART/'+this.props.UserName.photoURL).set({
        MyCart:[],
      }).then(()=>window.location.reload());
}   
   

render(){

if(this.props.UserName==='NO USER'){
   return(
      <div>
          <button onClick={()=>this.props.history.push('/SignUp')} className="LoginFirst waves-effect waves-light btn-large red" >
               LOGIN REQUIRED
         </button>
      </div>
  )
 }

else if(this.state.MyCart===''){
    return(
        <div>
            LOAD YOUR CART
        </div>
    )
}
else if(this.state.MyCart===null){
    return <h4>Your Shop Cart is Empty</h4>
}

else{        
        return(
<div>
    <br />
    <span>Your have {this.state.MyCart.MyCart.length} item in your cart.</span>

  <div>
      <table className="carttable" > 
          <tr>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
          </tr>
{
    this.state.MyCart.MyCart.map((CartVal)=>{
      return(   
        this.props.MyRawData.map((AllVal)=>{
               if(AllVal.ID===CartVal.PostID){
                   return(
                <tr>
                     <td>{AllVal.Item}</td>
                     <td>{AllVal.Price}</td>
                     <td>{CartVal.Quantity}</td>
                     <td>{AllVal.Price*CartVal.Quantity}</td>
                 </tr>
                 )
               }
        })
        )
        })
        
}

      </table>
  </div>

<button className="waves-effect waves-light btn" onClick={()=>this.ClearCart()}>CLEAR CART</button>
<button className="waves-effect waves-light btn">CONTINUE SHOPPING</button>
<button className="waves-effect waves-light btn" onClick={()=>this.props.history.push('/CheckOut')}>CHECKOUT</button>

</div>
        )
    }
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


export default connect(mapStateToProps,mapDispatchToProps)(ShopCart);

