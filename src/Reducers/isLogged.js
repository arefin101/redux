const isLogged = (state=false, action) => {

    switch(action.type) {

        case 'LOGOUT':
            return !state;
        default:
            return state;

    }

}

export default isLogged;