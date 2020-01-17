import React from 'react';
import MyCatagori from './MyCategori'
import { connect } from 'react-redux';



class Catogari extends React.Component {

    constructor() {
        super();
        this.state = {
            MyValues: []
        }
        this.MoveToNext = this.MoveToNext.bind(this);
        this.MakeData = this.MakeData.bind(this)
    }


    MoveToNext(val) {
        this.props.history.push('/Catogari2/' + val)
    }
    MakeData() {
        var MyVal = [];
        for (var val in this.props.MyCategory) {
            MyVal.push(val)
        }
        this.state.MyValues = MyVal;
    }


    render() {
        this.MakeData();

        return (
            <div>
                {this.state.MyValues.map((val) => {
                    var myimg;
                    if (val === 'PARWAZ_FANS') { myimg = require('../Images/Catogari/parwaz fan.jpg'); }
                    else if (val === 'GFC_FANS') { myimg = require('../Images/Catogari/gfc fan.jpg'); }
                    else if (val === 'PAK_FANS') { myimg = require('../Images/Catogari/pak fan.jpg'); }
                    else if (val === 'ROYAL_FANS') { myimg = require('../Images/Catogari/royal fan2.png'); }
                    else if (val === 'SK_FANS') { myimg = require('../Images/Catogari/sk fan.png'); }
                    else if (val === 'SONEX_FANS') { myimg = require('../Images/Catogari/sonex fan.jpg'); }
                    else if (val === 'GLAM_GAS') { myimg = require('../Images/Catogari/glam gas.png'); }
                    else if (val === 'ANEX') { myimg = require('../Images/Catogari/anex.png'); }
                    else { myimg = '' }

                    return <MyCatagori img={myimg} Title={val} clickme={() => this.MoveToNext(val)} />
                }
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        MyCategory: state.DataReducer.MyCategories.ALL_CATEGORY
    })
}

function mapDispatchToProps(dispatch) {
    return ({})
}

export default connect(mapStateToProps, mapDispatchToProps)(Catogari);
