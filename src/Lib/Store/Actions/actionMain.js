import {MAIN} from '../Const';

const changeCurrentPage = (page) => {
    return {
        type: MAIN.CHANGE_CURRENT_PAGE,
        action: page,
    }
};

export {
    changeCurrentPage,
}