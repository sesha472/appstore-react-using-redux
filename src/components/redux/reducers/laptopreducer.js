import {BUY_LAPTOPS} from '../actions/actiontypes';
const intialstate={
    numoflaptops:100,
}

const laptopreducer=(state=intialstate,action)=>{
    switch(action.type){
        case  BUY_LAPTOPS:
            return {numoflaptops: state.numoflaptops-1};
        default:
            return state;
    }
}

export default laptopreducer;