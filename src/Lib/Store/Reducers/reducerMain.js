import {MAIN} from '../Const';

const mainState = { 
    currentPage: "",
}

export default (state = mainState, action) => {
    switch(action.type) {
        case MAIN.CHANGE_CURRENT_PAGE:
        alert("yes");
        return {
            ...state,
            currentPage: action.payload,
        }

        default:
            return {
                ...state
            }
    }
}

