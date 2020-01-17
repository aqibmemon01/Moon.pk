import React from 'react';
import {SideNavItem,SideNav} from 'react-materialize';
import LoginImg from '../Images/login1.jpg'
import {connect} from 'react-redux';
import {BrowserRouter as Link } from "react-router-dom";
import fire from '../Config/fire'

class MySideNav extends React.Component{


render(){
  console.log(this.props.OnlineUser)
    return(
<SideNav trigger={<div className="MyACDiv" ><img src={LoginImg} className="loginimg" /><a href="" className="MyAC" >My Account</a></div>} options={{closeOnClick: true}}>
<SideNavItem userView user={{
    background: 'https://placeimg.com/640/480/tech',
    image: require('../Images/MyPic.jpg'),
    name: this.props.OnlineUser.displayName
  }} />
<SideNavItem href="#!second" icon="email">
{this.props.OnlineUser.email}
</SideNavItem>
<SideNavItem href="javascript:void(0)" onClick={()=><Link></Link>} icon="receipt">
My Orders

</SideNavItem>
<SideNavItem divider />
<SideNavItem waves href="#!third" onClick={()=>{ fire.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("SignOUT")
  }).catch(function(error) {
    // An error happened.
  })}} icon="system_update">
LOG OUT
</SideNavItem>
<SideNavItem waves href="#!third" icon="security">
RESET PASSWORD
</SideNavItem>
</SideNav>
)
}
}


function mapStateToProps(state){
  return({
      OnlineUser:state.MyReducer.UserName,
      })
  }
  
  function mapDispatchToProps(dispatch){
  return({
  
  })
  }
  export default connect(mapStateToProps,mapDispatchToProps)(MySideNav);