import React from 'react';
import './CSS/App.css';
import fire from './Config/fire'
import MyRouter from './Components/MyRouter'
import Foooter from './Components/footer'
import Header from './Components/header'
import PostCreator from './Components/PostCreator'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Check from './Components/onlycheck'
import {Preloader, Col} from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {LoadUser} from './Store/Action/action';
import Onlycheck from './Components/onlycheck';
import Database from './MyFirebase/DataBase';
import MyStorage from './MyFirebase/storage';
import LoadData from './DATA/LoadData';
import Slider from './Components/Slider';
import HomeContent from './Components/HomeContent';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
constructor(){
  super();
  this.state={
    MyUser:""
  }
}
componentDidMount(){
 
  
  }

render(){

if(this.props.RecCat===""){
  return(
    <div className="Starter" >
      
      <div>
      <div className="MoonStarter" >
        Moon.pk
      </div>
      <div className='develoStarter' >Developed By</div><br />
      <div className="ByStarter">Abu Bakar Memon</div>
      <span ><br />
      <Preloader size="big" flashing/> 
      </span>
      </div>
      <LoadData />
    </div>
  )
}
else{

  return (
    <Router>
    <div style={{backgroundColor:"white"}} >
  <Header /> 
   {/* <Slider /> */}
   {/* <HomeContent /> */}
   <MyRouter />
   <LoadData />
   <Foooter />
    </div>
    </Router>
  );
    }
}
}  

  



function mapStateToProps(state){
  return({
      UserName:state.MyReducer.UserName,
      RecCat:state.DataReducer.MyCategories      
  })
  }
  
  function mapDispatchToProps(dispatch){
  return({
      
  
  })
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
