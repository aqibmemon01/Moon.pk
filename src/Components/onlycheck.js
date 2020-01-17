import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
// import {LoadUser} from '../Store/Action/action';


class CheckMe extends Component {
constructor(){
    super();
  this.state={
      UserName:'',
      MyCat:""
  }

this.checkchange=this.checkchange.bind(this)
this.UpdateValue=this.UpdateValue.bind(this)

}
checkchange(){
//   console.log("WORKINGGGGG")
//   this.props.ChangeStateToReducer(this.state.UserName);
}
UpdateValue(val){
this.setState({UserName:val.target.value})
// console.log(this.state.UserName)

}


    render() {

        return (
            <div>
                <button onClick={()=>console.log(this.props.MyCategory.ALL_CATEGORY.ANEX[1].Item) }>CONSOLE</button>
                <h1>Hello World {this.props.UserName.email}</h1>
                <button onClick={this.checkchange} >Change</button>
                <input  onChange={(val)=>this.UpdateValue(val)} />
            </div>
)
    }
}

function mapStateToProps(state){
return({
    UserName:state.MyReducer.UserName,
    MyCategory:state.DataReducer.MyCategories,
    MyData:state.DataReducer.MyData
})
}

function mapDispatchToProps(dispatch){
return({

})
}


export default connect(mapStateToProps,mapDispatchToProps)(CheckMe);