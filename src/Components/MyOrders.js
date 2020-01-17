import React from 'react';
import { connect } from 'react-redux';
import fire from '../Config/fire'
import '../CSS/App.css';

class MyOrders extends React.Component {


    componentDidMount() {
        if (this.props.UserName === '' || this.props.UserName === 'NO USER') {

        }

        else {
            fire.database().ref('ORDERS/' + this.props.UserName.photoURL).on('value', (snapshot) => {
                this.setState({ MyOrders: snapshot.val().MyOrders })
            });
        }

    }





    constructor() {
        super();
        this.state = {
            MyOrders: []
        }



    }

    render() {
        console.log(this.state.MyOrders)
        console.log(this.props.UserName)

        if (this.props.UserName === 'NO USER') {
            return (
                <div>
                    <button onClick={() => this.props.history.push('/SignUp')} className="LoginFirst waves-effect waves-light btn-large red" >
                        LOGIN REQUIRED
        </button>
                </div>
            )
        }
        else {

            return (
                <div>
                    <h4> MY ORDERS</h4>
                    <div style={{ display: "flex" }}>
                        <table  >
                            <tr>
                                <th style={{ width: "10%" }}>
                                    Ordered By
      </th>
                                <th style={{ width: "50%", textAlign: "center" }}>
                                    Order Detail
      </th >
                                <th style={{ width: "10%" }}>
                                    Amount
      </th>
                                <th style={{ width: "10%" }}>
                                    Status
      </th>
                                <th style={{ width: "20%" }}>
                                    Order On
      </th>
                            </tr>

                            {this.state.MyOrders.map((val) => {
                                return (
                                    <tr>
                                        <td>
                                            {val.UserName}
                                        </td>
                                        <td>
                                            <table>
                                                {val.UserOrders[0].MyCart.map((val2) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                PostID : {val2.PostID}
                                                            </td>
                                                            <td>
                                                                Quantity : {val2.Quantity}
                                                            </td>
                                                        </tr>)
                                                })}
                                            </table>
                                        </td>
                                        <td>
                                            {val.TotalAmount}
                                        </td>
                                        <td>
                                            {val.OrderStatus}
                                        </td>
                                        <td>
                                            {val.OrderOn}
                                        </td>
                                    </tr>)
                            })}


                        </table>

                    </div>

                </div>


            )
        }

    }




}
function mapStateToProps(state) {
    return ({
        UserName: state.MyReducer.UserName,
        MyRawData: state.DataReducer.MyRawData
    })
}

function mapDispatchToProps(dispatch) {
    return ({

    })
}


export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
