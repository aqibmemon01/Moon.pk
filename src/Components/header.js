import React from 'react';
import '../CSS/App.css';
import { Link } from "react-router-dom";
import logo from '../Images/download.png'
import SideNav from '../Components/sidenav'
import {Autocomplete,Icon} from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

class Header extends React.Component {
   constructor(){
       super();

    this.state={
      SrchWidth:{Width:''}
    }
    this.state.SrchWidth.width=(window.innerWidth-810)+'px';

    this.serchdata={
       
      } 
   
    }

   componentDidMount() {
    let dropdowns = document.querySelectorAll('.dropdown-trigger');  
    let options = {
        inDuration: 300,
        outDuration: 300,
        hover: true,  //Activate on hover
        coverTrigger: false,  //Displays dropdown below the button
    };
    M.Dropdown.init(dropdowns, options);
  
    
    
}

    render() {
    
    if(this.props.MyRawData){
      this.props.MyRawData.map((val)=>{
        var Myval=val.Item;
        
        this.serchdata[Myval]=null
      })
    console.log(this.serchdata)
    }
    
    
    
    
    
      return (
    
    <div>
      <span>
      <Icon className='sidelogo'>view_headline</Icon></span>
<img src={logo} className="mylogo" />
      
    <div className="srchdiv"  >
    <Autocomplete style={this.state.SrchWidth} className="autocomp"  options={{data:this.serchdata}} placeholder="Search in Moon.PK" />
     {/* <Icon className="medium material-icons " >search
     </Icon> */}
    <button className="srchbtn">Search
    </button>
    </div>




<SideNav />

   
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


export default connect(mapStateToProps,mapDispatchToProps)(Header);