import React from 'react';
import './Shopstyle.css';
import {connect} from 'react-redux'; 
import {buylaptops} from './redux/actions/index.js'

class Shop extends React.Component{
//     state={
//         laptopscount:100,
//     }

//     buylaptops=()=>{
//         this.setState({laptopscount:this.state.laptopscount-1});
//     };

//     nolaptops=()=>{
//         if(this.state.laptopscount<100){
//         this.setState({laptopscount:this.state.laptopscount+1});
//     }
// };

    render(){
        return(
            <div className="Shop">
                <h1 className="tittle">WELCOME TO SHOPE</h1>
                <hr/>
                <div className="laptop">
                    <p>Dell inspiron laptop</p>
                    <p>Available:{this.props.numoflaptops}</p>
                    <br/>

                    <button onClick={this.props.buylaptops} > buy</button>
                    <br/>
                    <br/>
                    {/* <button onClick={this.props.nolaptops} > cancel</button> */}
                </div>

            </div>

        )
    }
} 


const mapStateToProps=(state)=>{
    return {
        numoflaptops:state.numoflaptops
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buylaptops:()=>dispatch(buylaptops())
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (Shop);