import React from 'react';
import '../CSS/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import shopcart from '../Images/shopcart.png'
import fire from '../Config/fire'
import SignUp from "../Pages/SignUp"
import Login from "../Pages/Login"
import Catogari from "./CategoriCreator"
import Catogari2 from "./CategoriCreator2"
import Posts from "./PostCreator"
import ItemDetail from './ItemDetail';
import ShopCart from './ShopCart';
import AddPost from './AddPost';
import CheckOut from './CheckOut';
import MyOrders from './MyOrders';
import Home from './HomeContent';
import { SideNavItem, SideNav } from 'react-materialize';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
// import createBrowserHistory from '../Config/History' 
import createBrowserHistory from 'history/createBrowserHistory'


const MyHistory = createBrowserHistory();
MyHistory.push('/home')
class MyRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Status: '',
      StatusOppo: ''
    }

  }

  render() {
    if (this.props.UserName.displayName) {
      this.state.Status = "MyNonActive";
      this.state.StatusOppo = "MyActive";
    }
    else {
      this.state.Status = "MyActive";
      this.state.StatusOppo = "MyNonActive";
    }

    return (
      <div>

        <Router history={MyHistory} >
          <div>
            <Link to="/ShopCart">
              <div className="cartdiv" >
                <img src={shopcart} className="shopimg" />
                <p>ShopCart</p>
              </div>
            </Link>

            <Navbar className="toplist">
              <div className="topdiv" >
                <ul >
                  <li><Link to="/MyOrders">MyOrders</Link></li>
                  <li><Link to="/Home">Home</Link></li>
                  <li><Link to="/AddPost">Sell on Moon.pk</Link></li>
                  <li><Link to="/Catogari/value">Catogari</Link></li>
                  <li className={this.state.Status} ><Link to="/SignUp">Sign Up</Link></li>
                  <li className={this.state.Status}><Link to="/Login">Login</Link></li>
                  <li className={this.state.StatusOppo} >Hi, {this.props.UserName.displayName}</li>
                </ul>
              </div>
            </Navbar>
            {/* FOR MOBILE */}
            <div className="topdiv2" >
              <ul className="toplist2" >
                {/* <li><Link to="/MyOrders">MyOrders</Link></li> */}
                <li className={this.state.Status} ><Link className='Mywhite' to="/SignUp">Sign Up</Link></li>
                {/* <li><Link className='Mywhite' to="/MyOrders">MyOrders</Link></li> */}
                <li><Link className='Mywhite' to="/Home">Home</Link></li>
                <li><Link className='Mywhite' to="/Catogari/value">Catogari</Link></li>
                {/* <li><Link to="/AddPost">Sell on Moon.pk</Link></li> */}
                {/* <li className={this.state.Status}><Link to="/Login">Login</Link></li> */}
                {/* <li className={this.state.StatusOppo} >Hi, {this.props.UserName.displayName}</li> */}
              </ul>
            </div>



            <Route exact path="/Home" component={Home} />
            <Route exact path="/MyOrders" component={MyOrders} />
            <Route exact path="/CheckOut" component={CheckOut} />
            <Route exact path="/AddPost" component={AddPost} />
            <Route exact path="/ShopCart" component={ShopCart} />
            <Route exact path="/Detail/:PostID" component={ItemDetail} />
            <Route exact path="/Posts/:wantcomp/:wantpost" component={Posts} />
            <Route exact path="/Catogari2/:cat2" component={Catogari2} />
            <Route exact path="/Catogari/:cat" component={Catogari} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Login" component={Login} />
          </div>
        </Router>

      </div>
    )
  }
}



function mapStateToProps(state) {
  return ({
    UserName: state.MyReducer.UserName
  })
}

function mapDispatchToProps(dispatch) {
  return ({

  })
}


export default connect(mapStateToProps, mapDispatchToProps)(MyRouter);