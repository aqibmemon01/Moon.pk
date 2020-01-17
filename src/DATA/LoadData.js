import React from 'react'
import '../CSS/Loading.css';
import fire from '../Config/fire'
import {connect} from 'react-redux';
import {LoadUser,LoadMyData,LoadCategory,MakeRowData,LoadMyCart} from '../Store/Action/action';


class LoadData extends React.Component {

constructor(){
super();
this.state={
    MyData:"",
    MyCategory:""
}

}

componentDidMount(){




// GET USER DATA IN MY STORE   
fire.auth().onAuthStateChanged((user)=>{
      if(user){       
                this.props.LoadUserData(user);  
                console.log(user)
            }
      else{
        this.props.LoadUserData("NO USER");
    }})
    
// GET DATA FROM FIREBASE DATABASE IN MY STORE
var MyData='aa';
var DataPromise = new Promise((res,rej)=>{
    fire.database().ref('My Data').on('value', 
    function(snapshot) {       
        MyData=snapshot.val();
        res("Clear")
});   
})
DataPromise.then((val)=>{
    this.setState({MyData:MyData})
    this.props.LoadData(this.state.MyData)
    console.log(this.props.RecData)
})
// GET CATEGORY DATA FROM FIREBASE DATABASE IN MY STORE
var MyCat='aa';
var CatPromise = new Promise((res,rej)=>{
    fire.database().ref('My_Category').on('value', function(snapshot) {       
        MyCat=snapshot.val();
        res("Clear2")
});   
})
CatPromise.then((val)=>{
    this.setState({MyCategory:MyCat})
    this.props.LoadCategory(this.state.MyCategory)
    console.log(this.props.RecCat)
})
// SET ALL DATA IN SINGLE ARRAY IN MY STORE
DataPromise.then(()=>{
var MyData=this.props.RecData.ALLDATA;
var MyArr=[];
    for(var x in  MyData){
        var firstloop=MyData[x];
        // console.log(firstloop)
      
        for(var y in firstloop){
      var secloop = firstloop[y]
        //   console.log(secloop)
          for(var z=0; z<secloop.length; z++){
            MyArr.push(secloop[z])
        }
      }
   }
this.props.RowData(MyArr)
// console.log(this.props.MyRowData)
})


}




render(){
    // 
    // console.log(this.props.UserName)
    // setInterval(()=>console.log(this.props.RecData),1000);    
if(
    this.state.MyCategory===""){
return(
 <div>
{/* <div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
   <div class="heart"></div>  
     <div class="back"></div> 
   
 
<div class="balls" id="red"><img className="MyImg" src={require('../Images/download.png')} /></div>

<div  id="blue"><img className="MyImg heart" src={require('../Images/Loading.png')} /></div>
LOADING
<div class="balls" id="green"><img className="MyImg" src={require('../Images/download.png')} /></div>  */}
LOADING
    
    </div>
    )
}
else if(this.state.MyCategory!="")
   {
        return(
    <div>
        {/* {this.state.MyCategory.ALL_CATEGORY.GLAM_GAS[1].Item} */}
    </div>
)
   }
}  

}


function mapStateToProps(state){
    return({
        RecData:state.DataReducer.MyData,
        RecCat:state.DataReducer.MyCategories,
        UserName:state.MyReducer.UserName,
        MyRawData:state.DataReducer.MyRawData
    })
    }
    
    function mapDispatchToProps(dispatch){
    return({
        LoadUserData:(PickUserName)=>{
            dispatch(LoadUser(PickUserName))
        }
        ,
        LoadData:(PickData)=>{
            dispatch(LoadMyData(PickData))
        },
        LoadCategory:(PickCat)=>{
            dispatch(LoadCategory(PickCat))
        },
        RowData:(PickData)=>{
            dispatch(MakeRowData(PickData))
        },

    })
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoadData);
  