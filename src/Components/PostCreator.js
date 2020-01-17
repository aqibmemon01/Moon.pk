import React from 'react';
import MyPost from './MyPost'
import {connect} from 'react-redux';
import ItemDetail from './ItemDetail';


class PostCreator extends React.Component{

    constructor(){
     super();
 
this.SwitchDetail=this.SwitchDetail.bind(this)

    }

SwitchDetail(RecData){
    this.props.history.push('/Detail/'+RecData)
}

render(){
    var WantPost=this.props.match.params.wantpost;
    var WantComp=this.props.match.params.wantcomp;
    
    var Process = 'this.props.MyData.' + WantComp + '.' + WantPost;
    Process = eval(Process)


    return(
        <div>
{Process.map((val)=>
<MyPost img={val.ImgURL} Title={val.Item} Disc={val.Disc}
Price={val.Price-((val.Price*val.Disc)/100)} BefPrice={val.Price} MyClick={()=>this.SwitchDetail(val.ID)} />
 
)
    }

        </div>
      )   
}
}

function mapStateToProps(state){
    return({
        UserName:state.MyReducer.UserName,
        MyData:state.DataReducer.MyData.ALLDATA
    })
    }
    
    function mapDispatchToProps(dispatch){
    }

export default connect(mapStateToProps,mapDispatchToProps)(PostCreator);
