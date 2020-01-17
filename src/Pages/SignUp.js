import React from 'react';
import fire from '../Config/fire'
import '../CSS/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Background from '../Images/SignUp3.jpg';

import {TextInput} from 'react-materialize';
var sectionStyle = {
  // width: "1000px",
  // height: "400px",
  backgroundImage: `url(${Background})`
};


class SignUp extends React.Component{
 
 componentDidMount(){

  fire.database().ref('UsersCode').on('value', (snapshot)=>{       
    this.setState({UserCode:snapshot.val()})  
})


}
 
 
 
 
  constructor(){
    super();
     this.state={
       email:'',
       passwd:'',
       confirmpasswd:'',
       firstName:'',
       lastName:'',
       Phone:'',
       currentuser:"",
       Classes:['','','','','','']
      };
this.PickData=this.PickData.bind(this);
this.SignUp=this.SignUp.bind(this);
this.CheckField=this.CheckField.bind(this);

    }
PickData(e,data){

  if(data=="email"){
  this.state.email=e.target.value;
}
else if(data=="passwd"){
  this.state.passwd=e.target.value;
}
else if(data=="confirmpasswd"){
  this.state.confirmpasswd=e.target.value;
}
else if(data=="FName"){
  this.state.firstName=e.target.value;
}
else if(data=="LName"){
  this.state.lastName=e.target.value;
}
else if(data=="Phone"){
  this.state.Phone=e.target.value;
}
}

SignUp(e){
  e.preventDefault();

  if(this.state.firstName!="" && this.state.lastName!="" && this.state.email!="" 
    && this.state.Phone!="" && this.state.passwd!="" && this.state.confirmpasswd!="")
     {
        if(this.state.passwd===this.state.confirmpasswd){

          fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.passwd).then((val)=>{
    
            fire.auth().currentUser.updateProfile({
              photoURL:this.state.UserCode,
              displayName: this.state.firstName+" "+this.state.lastName,
            })
            .then(()=>{
              fire.database().ref('UsersCode').set(this.state.UserCode+1);
            })
          })
          .catch(function(error) {
            alert(error)
          });        

        }
        else{
          alert("PLease Enter Same Password in Both Field");
          this.state.Classes[4]="Wrong";
          this.state.Classes[4]="Wrong";
          this.setState({Classes:this.state.Classes})
        }
}
else{
  alert("Please Fill All Fields")
}

  


}

CheckField(Data,MyID){
if(Data===""){
this.state.Classes[MyID]="Wrong"
}
else{
  this.state.Classes[MyID]="Rigth"
}

if(MyID===5 || MyID===4)
  {
    if(this.state.passwd===this.state.confirmpasswd){
    this.state.Classes[5]="Rigth"
  }
  else{
    this.state.Classes[5]="Wrong"
  } }
  this.setState({email:this.state.email})
  
}
  
    render(){
     return(
       <div className='SignUpPage' style={sectionStyle} >
      <form onSubmit={(e)=>this.SignUp(e)} >
       <h5  >Sign Up FORM {this.props.match.params.want}</h5>
       <p>User ID : {this.state.UserCode}</p>
   <div className="ColSet" >
       <TextInput inputClassName={this.state.Classes[0]}
        label="First Name" onChange={(e)=>this.PickData(e,"FName")}
        onBlur={()=>this.CheckField(this.state.firstName,0)} />
       <TextInput inputClassName={this.state.Classes[1]}
        email validate label="Email" onChange={(e)=>this.PickData(e,"email")} 
         />
       <TextInput inputClassName={this.state.Classes[2]}
        type="number" label="Phone Number" onChange={(e)=>this.PickData(e,"Phone")}  
        onBlur={()=>this.CheckField(this.state.Phone,2)} />
    </div>
    <div className="ColSet" >
       <TextInput inputClassName={this.state.Classes[3]} 
       label="Last Name" onChange={(e)=>this.PickData(e,"LName")}  
       onBlur={()=>this.CheckField(this.state.lastName,3)} />
       <TextInput inputClassName={this.state.Classes[4]}
        password label="Password" onChange={(e)=>this.PickData(e,"passwd")}  
        onBlur={()=>this.CheckField(this.state.passwd,4)} />
       <TextInput inputClassName={this.state.Classes[5]}
        password label="Confirm Password" onChange={(e)=>this.PickData(e,"confirmpasswd")}  
        onBlur={()=>this.CheckField(this.state.confirmpasswd,5)} />
    </div>   <br /> 
         <button className="waves-effect waves-light btn-large logbtn" type="submit" >Sign Up</button>
         </form>

<p>Already Member? <span style={{color:"blue"}} onClick={()=>this.props.history.push('/Login')}>Login Here.</span></p>

 
  
       </div>

     )

    }



}

export default SignUp;