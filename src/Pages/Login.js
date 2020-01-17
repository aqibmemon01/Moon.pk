import React from 'react';
import fire from '../Config/fire'
import {TextInput} from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import Background from '../Images/Login.jpg';


var sectionStyle = {
  backgroundImage: `url(${Background})`
};


class Login extends React.Component{
    constructor(){
    super();
     this.state={
       email:"",
       passwd:"",
       signin:false,
       currentuser:""
     };
this.PickData=this.PickData.bind(this);
this.Login=this.Login.bind(this);
this.check=this.check.bind(this);
this.Logout=this.Logout.bind(this);

    }
PickData(e,data){
  if(data=="email"){
  this.state.email=e.target.value;
  }
else if(data=="passwd"){
  this.state.passwd=e.target.value;}
}

Login(e){
  e.preventDefault();
  fire.auth().signInWithEmailAndPassword(this.state.email, this.state.passwd).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ...
  });
}
Logout(){
  fire.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("SignOUT")
  }).catch(function(error) {
    // An error happened.
  });
}

check(){
  fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
      // User is signed in.
    } else {
      // No user is signed in.
      console.log("NO USER AVAILABLE")
    }
  });
}

  
    render(){
     return(
       <div  className='SignUpPage' style={sectionStyle} >
      <form onSubmit={this.Login} >
       <h5 className='login' >LOGIN FORM</h5>
      <div className='logininput' >
       <TextInput email validate label="Email" onChange={(e)=>this.PickData(e,"email")} />
       <TextInput password label="Password" onChange={(e)=>this.PickData(e,"passwd")} />
       </div>
         <button className="waves-effect waves-light btn-large logbtn" type="submit" >LOGIN</button>
         {/* <button className="btn" type="button" onClick={this.Logout} >LOG OUT</button> */}
         </form><br />
         {/* <button onClick={this.check} >CHECK</button> */}

       </div>

     )

    }



}

export default Login;