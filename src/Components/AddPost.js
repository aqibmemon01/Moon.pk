import React from 'react';
import '../CSS/App.css';
import '../CSS/Item.css';
import 'materialize-css/dist/css/materialize.min.css';
import fire from '../Config/fire'
import { connect } from 'react-redux';
import { Icon, Button, TextInput, Dropdown } from 'react-materialize';
import { ADDPOST } from '../Store/Action/action';
import LoadData from '../DATA/LoadData';

var storage = fire.storage();


class AddPost extends React.Component {

  constructor() {
    super();
    this.state = {
      Brand: 'Select Brand',
      Category: 'Select Category',
      MyLength: '',
      GetItem: '',
      GetColor: '',
      GetPrice: '',
      Discount: '',
      GetDetail1: '',
      GetDetail2: '',
      GetDetail3: '',
      GetDetail4: '',
      GetDetail5: '',
      Img1: '',
      Img2: '',
      Img3: '',
      Img4: '',

      img1Prog: 0,
      img2Prog: 0,
      img3Prog: 0,
      img4Prog: 0,
      classManager: ['', '', '', '', '', '']
    }



    this.ADDPOST = this.ADDPOST.bind(this)




  }

  ADDPOST() {

    if (this.state.Brand === 'Select Brand' || this.state.Brand === 'Select Category') {
      alert('Select Brand Or category First')
    }
    else if (this.state.GetItem === '' || this.state.GetColor === '' || this.state.GetPrice === '' ||
      this.state.Discount === '' || this.state.GetDetail1 === '' || this.state.GetDetail2 === '') {
      alert('PLEASE FILL ALL REQUIRED FIELDS')
    }
    else if (this.state.img1Prog === undefined || this.state.img2Prog === undefined ||
      this.state.img3Prog === undefined || this.state.img4Prog === undefined) {
      alert('Please Wait Images is Uploading To Server')
    }
    else {
      var GetLastID = this.props.MyData[this.state.Brand][this.state.Category][this.state.MyLength - 1]["ID"];
      var IDCODE = GetLastID[0] + GetLastID[1] + GetLastID[2] + GetLastID[3]
      var MyDate = (new Date);
      var DateMaker = MyDate.getDate() + '/' + MyDate.getMonth() + '/' + MyDate.getFullYear() + ',' + MyDate.getHours() + ':' + MyDate.getMinutes();

      var PickData = {

        ID: IDCODE + (this.state.MyLength + 1),
        Cat: this.state.Category,
        Brand: this.state.Brand,
        Item: this.state.GetItem,
        ImgURL: this.state.Img1,
        Img2: this.state.Img2,
        Img3: this.state.Img3,
        Img4: this.state.Img4,
        Color: this.state.GetColor,
        Price: this.state.GetPrice,
        Disc: this.state.Discount,
        NetPrice: (Number(this.state.GetPrice)) - (Number(this.state.GetPrice) * Number(this.state.Discount) / 100),
        Detail1: this.state.GetDetail1,
        Detail2: this.state.GetDetail2,
        Detail3: this.state.GetDetail3,
        Detail4: this.state.GetDetail4,
        Detail5: this.state.GetDetail5,
        PostBy: this.props.UserName.displayName,
        OrderOn: DateMaker
      }


      this.props.ADD_POST_REDUX(this.state.Brand, this.state.Category, this.state.MyLength, PickData)

    }
  }

  PickData(e, data) {

    if (data == "item") {
      this.state.GetItem = e.target.value;
    }
    else if (data == "color") {
      this.state.GetColor = e.target.value;
    }
    else if (data == "befprice") {
      this.setState({ GetPrice: e.target.value })
    }
    else if (data == "Discount") {
      this.setState({ Discount: e.target.value })
    }
    else if (data == "detail1") {
      this.state.GetDetail1 = e.target.value;
    }
    else if (data == "detail2") {
      this.state.GetDetail2 = e.target.value;
    }
    else if (data == "detail3") {
      this.state.GetDetail3 = e.target.value;
    }
    else if (data == "detail4") {
      this.state.GetDetail4 = e.target.value;
    }
    else if (data == "detail5") {
      this.state.GetDetail5 = e.target.value;
    }
    else if (data == "Img1") {
      this.setState({ img1Prog: undefined })
      var MyFile = ''
      MyFile = e.target.files[0];
      var storageref = storage.ref('MyImages/' + this.props.UserName.photoURL + '/' + MyFile.name);
      var tasks = storageref.put(MyFile)
      setTimeout(() => {
        tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.state.Img1 = downloadURL;
          // alert("Image 1 Is Uploaded Success")
          this.setState({ img1Prog: 100 })
        }
        ).catch((errr) => {

          setTimeout(() => {
            tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.state.Img1 = downloadURL;
              // alert("sectime Image 1 Is Uploaded Success")
              this.setState({ img1Prog: 100 })
            }
            ).catch(() => alert("Img1 is Heavy Image Please Choose Ligth Image"))
          }, 3000)

        })
      }, 1000)

    }
    else if (data == "Img2") {
      this.setState({ img2Prog: undefined })
      var MyFile2 = ''
      MyFile2 = e.target.files[0];
      var storageref = storage.ref('MyImages/' + this.props.UserName.photoURL + '/' + MyFile2.name);
      var tasks = storageref.put(MyFile2)

      setTimeout(() => {
        tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.state.Img2 = downloadURL;
          // alert("Image 2 Is Uploaded Success")
          this.setState({ img2Prog: 100 })
        }
        ).catch((errr) => {

          setTimeout(() => {
            tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.state.Img2 = downloadURL;
              // alert("sectime Image 2 Is Uploaded Success")
              this.setState({ img2Prog: 100 })
            }
            ).catch(() => alert("Img2 is Heavy Image Please Choose Ligth Image"))
          }, 3000)

        })
      }, 1000)
    }
    else if (data == "Img3") {
      this.setState({ img3Prog: undefined })
      var MyFile3 = ''
      MyFile3 = e.target.files[0];
      var storageref = storage.ref('MyImages/' + this.props.UserName.photoURL + '/' + MyFile3.name);
      var tasks = storageref.put(MyFile3)
      setTimeout(() => {
        tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.state.Img3 = downloadURL;
          // alert("Image 3 Is Uploaded Success")
          this.setState({ img3Prog: 100 })
        }
        ).catch((errr) => {

          setTimeout(() => {
            tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.state.Img3 = downloadURL;
              // alert("sectime Image 3 Is Uploaded Success")
              //  this.setState({img3Prog:100})
            }
            ).catch(() => alert("Img3 is Heavy Image Please Choose Ligth Image"))
          }, 3000)

        })
      }, 1000)
    }

    else if (data == "Img4") {
      this.setState({ img4Prog: undefined })
      var MyFile4 = ''
      MyFile4 = e.target.files[0];
      var storageref = storage.ref('MyImages/' + this.props.UserName.photoURL + '/' + MyFile4.name);
      var tasks = storageref.put(MyFile4)
      setTimeout(() => {
        tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.state.Img4 = downloadURL;
          // alert("Image 4 Is Uploaded Success")
          this.setState({ img4Prog: 100 })
        }
        ).catch((errr) => {
          setTimeout(() => {
            tasks.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.state.Img4 = downloadURL;
              // alert("sectime Image 4 Is Uploaded Success")
              //  this.setState({img4Prog:100})
            }
            ).catch(() => alert("Img4 is Heavy Image Please Choose Ligth Image"))
          }, 3000)
        })
      }, 1000)
      // tasks.snapshot.ref.getDownloadURL().then((downloadURL)=>{
      //   this.setState({Img4:downloadURL});
      //   alert("Image 4 Is Uploaded Success")
      //   })
    }





  }



  render() {
    var MyData = this.props.MyData;
    var MyArr = [];
    var MyCat = [];
    var MyLength = [];
    for (var val in MyData) {
      MyArr.push(val)
    }
    if (this.state.Brand != 'Select Brand') {

      for (var val in MyData[this.state.Brand]) {
        MyCat.push(val)
      }
    }
    if (this.state.Category != 'Select Category') {

      for (var val in MyData[this.state.Brand][this.state.Category]) {
        MyLength.push(val)
      }
      this.state.MyLength = MyLength.length;
    }




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

          <h2> ADD YOUR POST</h2>
          <Dropdown
            trigger={
              <Button waves="light">
                {this.state.Brand}
                <Icon right>
                  arrow_drop_down
</Icon></Button>}>

            {MyArr.map((val) => {
              return (
                <a onClick={() => this.setState({ Brand: val })}>
                  {val}
                </a>)
            })}
          </Dropdown>

          <Dropdown trigger={
            <Button className={this.state.Brand == "Select Brand" ? "MyNonActive" : "MyActive"}
              waves="light">
              {this.state.Category}
              <Icon right>
                arrow_drop_down
</Icon>
            </Button>}>

            {MyCat.map((val) => {
              return (
                <a onClick={() => this.setState({ Category: val })}>
                  {val}
                </a>)
            })}

          </Dropdown>

          <TextInput label="Item Display" onChange={(e) => this.PickData(e, "item")} />
          <TextInput label="Color" onChange={(e) => this.PickData(e, "color")} />
          <TextInput label="Retail Price" onChange={(e) => this.PickData(e, "befprice")} />
          <TextInput label="Discount(%)" onChange={(e) => this.PickData(e, "Discount")} />
          <span>Actual Price is : {(Number(this.state.GetPrice)) - (Number(this.state.GetPrice) * Number(this.state.Discount) / 100)}</span>
          <TextInput label="Item Detail 1" onChange={(e) => this.PickData(e, "detail1")} />
          <TextInput label="Item Detail 2" onChange={(e) => this.PickData(e, "detail2")} />
          <TextInput label="Item Detail 3" onChange={(e) => this.PickData(e, "detail3")} />
          <TextInput label="Item Detail 4" onChange={(e) => this.PickData(e, "detail4")} />
          <TextInput label="Item Detail 5" onChange={(e) => this.PickData(e, "detail5")} />



          <label>Uplaod Image(Main) <input type="file" onChange={(e) => this.PickData(e, "Img1")} /> </label>
          <progress className={this.state.img1Prog == 100 ? "MyGreen" : ""} max={100} min={0} value={this.state.img1Prog} ></progress><br />
          <label>Uplaod Image(Extra 1) <input type="file" onChange={(e) => this.PickData(e, "Img2")} /> </label>
          <progress className={this.state.img2Prog == 100 ? "MyGreen" : ""} max={100} min={0} value={this.state.img2Prog} ></progress><br />
          <label>Uplaod Image(Extra 2) <input type="file" onChange={(e) => this.PickData(e, "Img3")} /> </label>
          <progress className={this.state.img3Prog == 100 ? "MyGreen" : ""} max={100} min={0} value={this.state.img3Prog} ></progress><br />
          <label>Uplaod Image(Extra 3) <input type="file" onChange={(e) => this.PickData(e, "Img4")} /> </label>
          <progress className={this.state.img4Prog == 100 ? "MyGreen" : ""} max={100} min={0} value={this.state.img4Prog} ></progress><br />



          <br />
          <button className="ADDBTN waves-effect waves-light btn-large green"
            onClick={() => this.ADDPOST()} >ADD POST</button>

        </div>
      )
    }
  }
}


function mapStateToProps(state) {
  return ({
    UserName: state.MyReducer.UserName,
    MyCategory: state.DataReducer.MyCategories,
    MyData: state.DataReducer.MyData.ALLDATA,
    MyRawData: state.DataReducer.MyRawData
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    ADD_POST_REDUX: (Cat1, Cat2, PutIndex, PickData) => {
      dispatch(ADDPOST(Cat1, Cat2, PutIndex, PickData))
    }
  })
}



export default connect(mapStateToProps, mapDispatchToProps)(AddPost);

