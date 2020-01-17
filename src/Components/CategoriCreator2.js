import React from 'react';
import MyCatagori from './MyCategori'
import { connect } from 'react-redux';


class Catogari2 extends React.Component {

    constructor() {
        super();

        this.RecMyData = '';
        this.MoveToNext = this.MoveToNext.bind(this)
    }


    MoveToNext(val) {
        this.RecMyData = this.props.match.params.cat2;
        this.props.history.push('/Posts/' + this.RecMyData + '/' + val.Item)
    }

    render() {

        var myimg = '';
        var RecData = this.props.match.params.cat2;
        var Process = 'this.props.MyCategory.' + RecData;
        Process = eval(Process)

        if (RecData === 'PARWAZ_FANS') { myimg = require('../Images/Catogari/parwaz fan.jpg'); }
        else if (RecData === 'GFC_FANS') { myimg = require('../Images/Catogari/gfc fan.jpg'); }
        else if (RecData === 'PAK_FANS') { myimg = require('../Images/Catogari/pak fan.jpg'); }
        else if (RecData === 'ROYAL_FANS') { myimg = require('../Images/Catogari/royal fan2.png'); }
        else if (RecData === 'SK_FANS') { myimg = require('../Images/Catogari/sk fan.png'); }
        else if (RecData === 'SONEX_FANS') { myimg = require('../Images/Catogari/sonex fan.jpg'); }
        else if (RecData === 'GLAM_GAS') { myimg = require('../Images/Catogari/glam gas.png'); }
        else if (RecData === 'ANEX') { myimg = require('../Images/Catogari/anex.png'); }
        else { myimg = '' }


        return (
            <div>
                {
                    Process.map((val) => {
                    return <MyCatagori img={myimg} Title={val.Item} clickme={() => this.MoveToNext(val)} />
                })
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Catogari2);
