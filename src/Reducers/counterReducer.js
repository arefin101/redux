const counterReducer = (state = 0, action) => {

    switch(action.type) {

        case 'INCREASE': 
            return state+action.value;

        case 'DECREASE':
            return state-action.value;
            
        default:
            return state;


    }

}

export default counterReducer;